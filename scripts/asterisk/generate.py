"""Generate src/definitions/{actions,events}/**, all.actions.ts and all.events.ts.

Inputs (all under scripts/asterisk/):
  data/docs-ami.json        AMI part of the Asterisk XML docs (extract-docs.sh). Same content as
                            docs.asterisk.org/Asterisk_22_Documentation/API_Documentation/.
  data/source-events.json   Events Asterisk emits but does not document, read from the C source.
  data/source-actions.json  What each action returns (Response headers, list/complete events),
                            read from the C source; the XML docs describe this for a few actions only.
  overrides.json            Manual corrections: docs errors verified against the source, and
                            types kept for backward compatibility. Every entry carries a reason.

Usage: python3 -I scripts/asterisk/generate.py   (then format with prettier; see npm run generate)
"""
import json
import os
import re
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
DEFS = os.path.join(REPO, 'src', 'definitions')

CHANNEL_SNAPSHOT = ['Channel', 'ChannelState', 'ChannelStateDesc', 'CallerIDNum', 'CallerIDName',
                    'ConnectedLineNum', 'ConnectedLineName', 'Language', 'AccountCode', 'Context',
                    'Exten', 'Priority', 'Uniqueid', 'Linkedid']
BRIDGE_SNAPSHOT = ['BridgeUniqueid', 'BridgeType', 'BridgeTechnology', 'BridgeCreator', 'BridgeName',
                   'BridgeNumChannels', 'BridgeVideoSourceMode', 'BridgeVideoSource']
CHANNEL_STATE_DESC = ['Down', 'Rsrvd', 'OffHook', 'Dialing', 'Ring', 'Ringing', 'Up', 'Busy',
                      'Dialing Offhook', 'Pre-ring', 'Unknown']

# Phrases in a documented event parameter that mean the header is not always sent.
CONDITIONAL = re.compile(
    r"\b(only (be )?(present|included|set|sent|appears?|provided|available|exists?|reported|populated)"
    r"|is (omitted|not (always )?(present|included|sent))|may (not )?be (absent|omitted|present)"
    r"|if (present|set|available|applicable|any|known|enabled)\b|will (not )?be (present|included|omitted) (only )?(if|when)"
    r"|present (only )?(if|when)|included (only )?(if|when)|not present|when (available|applicable|present)"
    r"|optional)", re.I)
ENUM_TOKEN = re.compile(r'^[A-Za-z0-9_.:+/ &()-]+$')
IDENT = re.compile(r'^[A-Za-z_$][A-Za-z0-9_$]*$')
DOCS_URL = 'https://docs.asterisk.org/Asterisk_{major}_Documentation/API_Documentation/{kind}/{name}/'


def load(name):
    with open(os.path.join(HERE, name)) as f:
        return json.load(f)


def type_name(name):
    return name.replace('-', '_')


def first_sentences(text, limit=320):
    text = re.sub(r'\s+', ' ', text or '').strip()
    if len(text) > limit:
        cut = text[:limit]
        dot = cut.rfind('. ')
        text = cut[:dot + 1] if dot > 80 else cut.rstrip() + '…'
    return text.replace('*/', '*∕')


def ts_str(v):
    return "'" + v.replace('\\', '\\\\').replace("'", "\\'") + "'"


def ts_key(name):
    """Property key for a header name; numbered headers become template-literal index keys.

    The docs write numbered headers as Action-000000 or UnitType(0); the source data as
    Category-NNNNNN; a header whose name is itself variable as <ActionName>.
    """
    if re.fullmatch(r'<[^>]+>', name):
        return '[key: string]', True
    pattern = re.sub(r'0{6}|N{6}', '${string}', name)
    pattern = pattern.replace('(0)', '(${number})')
    if pattern != name:
        return '[key: `%s`]' % pattern, True
    return (name if IDENT.match(name) else ts_str(name)), False


class Field:
    def __init__(self, name, ts_type='string', optional=False, doc='', enum=None, default=None):
        self.name, self.ts_type, self.optional = name, ts_type, optional
        self.doc, self.enum, self.default = doc, enum, default


# ---------------------------------------------------------------- model building

def enum_ok(values):
    return bool(values) and all(ENUM_TOKEN.match(v) and '...' not in v for v in values)


class Registry:
    """Named shared types reused when an enum matches exactly.

    Scans the hand-written src/definitions/<module>.ts files for string-literal union aliases
    (export type X = 'a' | 'b') and string enums (export enum X { A = '0' }).
    """

    def __init__(self, modules):
        self.by_values = {}
        self.module_of = {}
        for mod in modules:
            with open(os.path.join(DEFS, mod + '.ts')) as f:
                text = f.read()
            for m in re.finditer(r"export\s+type\s+(\w+)\s*=\s*((?:\s*\|?\s*(['\"])[^'\"]*\3)+)\s*;?", text):
                values = re.findall(r"['\"]([^'\"]*)['\"]", m.group(2))
                self.by_values.setdefault(frozenset(values), m.group(1))
                self.module_of[m.group(1)] = mod
            for m in re.finditer(r'export\s+enum\s+(\w+)\s*\{', text):
                self.module_of[m.group(1)] = mod

    def lookup(self, values):
        return self.by_values.get(frozenset(values))


def event_field_type(snapshot_field, enum, reg):
    if snapshot_field == 'ChannelState':
        return 'ChannelState'
    if enum and enum_ok(enum):
        named = reg.lookup(enum)
        return named or ' | '.join(ts_str(v) for v in enum)
    return 'string'


def build_events(docs, src_events, ov, reg):
    events = {}
    by_name = {}
    for e in docs['events']:
        by_name.setdefault(e['name'], []).append(e)
    for name, descs in by_name.items():
        instances = [i for d in descs for i in d['instances']]
        order, seen, count = [], {}, {}
        for inst in instances:
            for p in inst['params']:
                if p['name'] == 'ActionID':
                    continue
                if p['name'] not in seen:
                    seen[p['name']] = p
                    order.append(p['name'])
                count[p['name']] = count.get(p['name'], 0) + 1
        fields = {}
        for pn in order:
            p = seen[pn]
            snap = p.get('snapshotField')
            optional = count[pn] < len(instances)
            if snap == 'BridgeVideoSource':
                optional = True  # only sent when the bridge has a video source
            elif p.get('required') == 'false':
                optional = True
            elif p.get('required') != 'true' and not snap and CONDITIONAL.search(p.get('doc') or ''):
                optional = True
            fields[pn] = Field(pn, event_field_type(snap, p.get('enum'), reg), optional,
                               p.get('doc') or '')
        modules = sorted({i.get('module') or d.get('module') for d in descs for i in d['instances']} - {None})
        events[name] = {
            'name': name, 'origin': 'docs', 'modules': modules,
            'classes': sorted({(i.get('class') or '').replace('EVENT_FLAG_', '').lower()
                               for i in instances} - {''}),
            'synopsis': next((i['synopsis'] for i in instances if i['synopsis']), ''),
            'fields': fields, 'sources': [],
        }
    for name, se in src_events.items():
        if name.startswith('_') or se.get('role') == 'notAnEvent':
            continue
        if name in events:
            raise SystemExit('source-events.json duplicates documented event %s' % name)
        fields = {}
        for prefix in se.get('channelSnapshotPrefixes', []):
            for f in CHANNEL_SNAPSHOT:
                fields[prefix + f] = Field(prefix + f, event_field_type(f,
                                           CHANNEL_STATE_DESC if f == 'ChannelStateDesc' else None, reg))
        for prefix in se.get('bridgeSnapshotPrefixes', []):
            for f in BRIDGE_SNAPSHOT:
                enum = ['none', 'talker', 'single'] if f == 'BridgeVideoSourceMode' else None
                fields[prefix + f] = Field(prefix + f, event_field_type(f, enum, reg),
                                           optional=(f == 'BridgeVideoSource'))
        for f in se['fields']:
            if f['name'] in ('Event', 'ActionID'):
                continue
            values = f.get('values')
            t = event_field_type(None, values, reg)
            fields[f['name']] = Field(f['name'], t, bool(f.get('optional')), f.get('note') or '')
        events[name] = {
            'name': name, 'origin': 'source', 'modules': [se.get('module')] if se.get('module') else [],
            'classes': [], 'synopsis': se.get('synopsis') or '', 'fields': fields,
            'sources': se.get('sources', []), 'emittedBy': se.get('emittedBy', []),
            'role': se.get('role'),
        }
    for name, o in ov.get('events', {}).items():
        if name.startswith('_'):
            continue
        if name not in events:
            raise SystemExit('overrides.json: unknown event %s' % name)
        apply_field_overrides(events[name], o, event=True, reg=reg)
    return events


def apply_field_overrides(item, o, event, reg):
    fields = item['fields']
    if 'replaceFields' in o:
        fields.clear()
    for f in o.get('replaceFields', []) + o.get('addFields', []):
        values = f.get('values')
        t = f.get('type') or (event_field_type(None, values, reg) if event
                              else request_type(values, False))
        fields[f['name']] = Field(f['name'], t, bool(f.get('optional')), f.get('doc') or '')
    for n in o.get('removeFields', []):
        fields.pop(n)
    for n, t in o.get('fieldTypes', {}).items():
        fields[n].ts_type = t
    for n in o.get('optional', []):
        fields[n].optional = True
    for prefix in o.get('optionalPrefixes', []):
        matched = [f for n, f in fields.items() if n.startswith(prefix)]
        if not matched:
            raise SystemExit('optionalPrefixes: no field of %s starts with %s' % (item['name'], prefix))
        for f in matched:
            f.optional = True
    for n in o.get('required', []):
        fields[n].optional = False
    if o.get('reason'):
        item.setdefault('corrections', []).append(o['reason'])


def request_type(enum, multiple):
    base = 'string'
    if enum and enum_ok(enum):
        base = ' | '.join(ts_str(v) for v in enum) + ' | (string & {})'
    if multiple:
        return 'string | string[]' if base == 'string' else '(%s) | string[]' % base
    return base


def build_actions(docs, src_actions, ov, events):
    actions = {}
    for a in docs['actions']:
        fields = {}
        drop_enum = set(ov.get('dropRequestEnums', {}).get(a['name'], []))
        for p in a['params']:
            if p['name'] == 'ActionID':
                continue
            enum = None if p['name'] in drop_enum else p.get('enum')
            fields[p['name']] = Field(p['name'], request_type(enum, p.get('multiple') == 'true'),
                                      p.get('required') != 'true', p.get('doc') or '',
                                      default=p.get('default'))
        sa = src_actions.get(a['name'])
        if sa is None:
            raise SystemExit('source-actions.json has no entry for action %s' % a['name'])
        list_events = []
        for n in a['listEvents'] + sa.get('listItemEvents', []) + a['finalEvents'] + \
                ([sa['completeEvent']] if sa.get('completeEvent') else []):
            if n not in list_events:
                list_events.append(n)
        resp = {}
        for f in sa.get('responseFields', []):
            if f['name'] == 'EventList':
                continue  # AmiResponse.EventList ('start' on list actions)
            values = f.get('values')
            t = ' | '.join(ts_str(v) for v in values) if values and enum_ok(values) else 'string'
            resp[f['name']] = Field(f['name'], t, bool(f.get('optional')), f.get('note') or '')
        actions[a['name']] = {
            'name': a['name'], 'module': a['module'], 'synopsis': a['synopsis'],
            'description': a.get('description', ''), 'fields': fields, 'response': resp,
            'events': list_events, 'otherEvents': sa.get('otherEvents', []),
            'responseKind': sa.get('responseKind'), 'note': sa.get('note') or '',
            'source': sa.get('source'),
        }
    for name, o in ov.get('actions', {}).items():
        if name.startswith('_'):
            continue
        act = actions[name]
        apply_field_overrides(act, o, event=False, reg=None)
        for f in o.get('responseFields', []):
            act['response'][f['name']] = Field(f['name'], f.get('type', 'string'),
                                               bool(f.get('optional')), f.get('doc') or '')
        if 'events' in o:
            act['events'] = o['events']
    reply_events = {n for a in actions.values() for n in a['events']}
    reply_events -= set(ov['actionId']['unsolicited'])
    reply_events |= set(ov['actionId']['alsoRequired'])
    for n in reply_events:
        fields = events[n]['fields']
        fields.pop('ActionID', None)
        events[n]['fields'] = {'ActionID': Field('ActionID', 'string', False,
                                                 'ActionID of the action this event replies to.'), **fields}
    for a in actions.values():
        missing = [n for n in a['events'] + a['otherEvents'] if n not in events]
        if missing:
            raise SystemExit('action %s refers to unknown events %s' % (a['name'], missing))
    return actions


# ---------------------------------------------------------------- layout

def folder_for(name, rules):
    for r in rules:
        if name in r.get('names', []) or any(name.startswith(p) for p in r.get('prefixes', [])):
            return r['folder']
    return ''


def rel_import(from_dir, to_file):
    rel = os.path.relpath(to_file, from_dir)
    rel = rel[:-3] if rel.endswith('.ts') else rel
    return rel if rel.startswith('.') else './' + rel


# ---------------------------------------------------------------- emit

def jsdoc(lines, indent=''):
    lines = [l.replace('*/', '*\u2215') for l in lines if l is not None]
    if not lines:
        return ''
    if len(lines) == 1 and len(lines[0]) < 90:
        return '%s/** %s */\n' % (indent, lines[0])
    return indent + '/**\n' + ''.join('%s * %s\n' % (indent, l) if l else '%s *\n' % indent
                                      for l in lines) + indent + ' */\n'


def emit_fields(fields, indent='    '):
    out = []
    for f in fields.values():
        key, index = ts_key(f.name)
        doc = []
        if f.doc:
            doc.append(first_sentences(f.doc))
        if f.default:
            doc.append('@default %s' % f.default)
        out.append(jsdoc(doc, indent))
        opt = '?' if f.optional and not index else ''
        out.append('%s%s%s: %s;\n' % (indent, key, opt, f.ts_type))
    return ''.join(out)


def header():
    return jsdoc(['Generated by scripts/asterisk/generate.py from Asterisk %s. Do not edit by hand:'
                  % ASTERISK, 'change scripts/asterisk/overrides.json or the data files and regenerate.'])


def file_banner():
    return '// Generated by scripts/asterisk/generate.py from Asterisk %s docs. Do not edit by hand.\n' % ASTERISK


def write(path, text):
    if not text.startswith('/**'):
        text = file_banner() + text
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(text)


def emit_event(ev, path, reg):
    d = os.path.dirname(path)
    imports = ["import { GenericAmiEvent } from '%s';\n" % rel_import(d, os.path.join(DEFS, 'generic.types.ts'))]
    used = sorted({t for f in ev['fields'].values() for t in re.findall(r'[A-Za-z_]\w*', f.ts_type)
                   if t in reg.module_of})
    by_mod = {}
    for t in used:
        by_mod.setdefault(reg.module_of[t], []).append(t)
    for mod, names in sorted(by_mod.items()):
        imports.append("import { %s } from '%s';\n" % (', '.join(names), rel_import(d, os.path.join(DEFS, mod + '.ts'))))
    doc = []
    if ev['synopsis']:
        doc.append(first_sentences(ev['synopsis'], 400))
    if ev['origin'] == 'docs':
        doc.append('@see ' + DOCS_URL.format(major=MAJOR, kind='AMI_Events', name=ev['name']))
    else:
        doc.append('Not described in the Asterisk XML documentation; fields are taken from the source:')
        doc.extend('    ' + s for s in ev['sources'])
    if ev.get('emittedBy'):
        doc.append('Emitted in response to: %s.' % ', '.join(ev['emittedBy']))
    for c in ev.get('corrections', []):
        doc.append('Correction to the docs: ' + c)
    if ev['modules']:
        doc.append('Module: %s.' % ', '.join(ev['modules']))
    body = ''.join(imports) + '\n' + jsdoc(doc) + 'type Payload = {\n' + emit_fields(ev['fields']) + '};\n\n'
    body += "export type %s = GenericAmiEvent<%s, Payload>;\n" % (type_name(ev['name']), ts_str(ev['name']))
    write(path, body)


def emit_action(a, path, event_paths):
    d = os.path.dirname(path)
    imports = ["import { AmiActionPrototype, AmiResponse } from '%s';\n"
               % rel_import(d, os.path.join(DEFS, 'generic.types.ts'))]
    ev_names = []
    for n in a['events']:
        t = type_name(n)
        alias = t + 'Event' if t == a['name'] else t
        imports.append("import { %s } from '%s';\n" % (t if alias == t else '%s as %s' % (t, alias),
                                                       rel_import(d, event_paths[n])))
        ev_names.append(alias)
    doc = []
    if a['synopsis']:
        doc.append(first_sentences(a['synopsis'], 300))
    if a['description']:
        doc.append('')
        doc.append(first_sentences(a['description'], 500))
    doc.append('')
    doc.append('@see ' + DOCS_URL.format(major=MAJOR, kind='AMI_Actions', name=a['name']))
    if a['otherEvents']:
        doc.append('Also triggers: %s.' % ', '.join(a['otherEvents']))
    if a['responseKind'] == 'special' and a['note']:
        doc.append('Response: ' + first_sentences(a['note'], 300))
    for c in a.get('corrections', []):
        doc.append('Note: ' + c)
    doc.append('Module: %s.' % a['module'])
    body = ''.join(imports) + '\n'
    body += 'type Request = {\n' + emit_fields(a['fields']) + '};\n\n' if a['fields'] else 'type Request = {};\n\n'
    if a['response']:
        body += 'type Response = AmiResponse & {\n' + emit_fields(a['response']) + '};\n\n'
    else:
        body += 'type Response = AmiResponse;\n\n'
    body += 'type Event = %s;\n\n' % (' | '.join(ev_names) if ev_names else 'never')
    body += jsdoc(doc) + 'export type %s = AmiActionPrototype<Request, Response, Event>;\n' % a['name']
    write(path, body)


def emit_barrels(root, paths):
    """index.ts in every folder under root re-exporting its files and subfolders."""
    dirs = {}
    for p in paths:
        d = os.path.dirname(p)
        dirs.setdefault(d, set()).add(os.path.basename(p)[:-3])
        while d != root:
            parent = os.path.dirname(d)
            dirs.setdefault(parent, set()).add(os.path.basename(d))
            d = parent
    for d, entries in dirs.items():
        if d == root:
            continue
        write(os.path.join(d, 'index.ts'), ''.join("export * from './%s';\n" % e for e in sorted(entries)))
    return sorted(dirs.get(root, set()))


def main():
    global ASTERISK, MAJOR
    docs = load('data/docs-ami.json')
    ASTERISK = docs['asterisk']
    MAJOR = ASTERISK.split('.')[0]
    src_events = load('data/source-events.json')
    src_actions = load('data/source-actions.json')
    ov = load('overrides.json')
    reg = Registry(ov['namedTypeFiles'])
    events = build_events(docs, src_events, ov, reg)
    actions = build_actions(docs, src_actions, ov, events)

    act_root, ev_root = os.path.join(DEFS, 'actions'), os.path.join(DEFS, 'events')
    for d in (act_root, ev_root):
        shutil.rmtree(d, ignore_errors=True)

    event_paths = {}
    for n in sorted(events):
        event_paths[n] = os.path.join(ev_root, folder_for(n, ov['layout']['events']), n + '.ts')
    for n in sorted(events):
        emit_event(events[n], event_paths[n], reg)
    action_paths = {n: os.path.join(act_root, folder_for(n, ov['layout']['actions']), n + '.ts')
                    for n in actions}
    for n in sorted(actions):
        emit_action(actions[n], action_paths[n], event_paths)

    top = emit_barrels(act_root, list(action_paths.values()))
    write(os.path.join(act_root, 'index.ts'), ''.join("export * from './%s';\n" % e for e in top))
    top = emit_barrels(ev_root, list(event_paths.values()))
    names = sorted(events, key=str.lower)
    tn = [type_name(n) for n in names]
    ev_index = ''.join("export * from './%s';\n" % e for e in top) + '\n'
    ev_index += ''.join("import type { %s } from '%s';\n" % (type_name(n), rel_import(ev_root, event_paths[n]))
                        for n in names)
    ev_index += '\n' + jsdoc(['Every AMI event: documented ones and those taken from the Asterisk source.'])
    ev_index += 'export type AmiEvent =\n' + ''.join('    | %s\n' % t for t in tn) + ';\n\n'
    ev_index += jsdoc(['Event type by its `Event` header value.'])
    ev_index += "export type AmiEventMap = { [E in AmiEvent as E['Event']]: E };\n\n"
    for group, members in ov['eventGroups'].items():
        if group.startswith('_'):
            continue
        body = ' | '.join(type_name(m) for m in members) if members else 'never'
        ev_index += 'export type %s = %s;\n' % (group, body)
    write(os.path.join(ev_root, 'index.ts'), header() + ev_index)

    write(os.path.join(DEFS, 'all.events.ts'), header() +
          'export type AmiEventType =\n' + ''.join('    | %s\n' % ts_str(n) for n in names) + ';\n')
    an = sorted(actions, key=str.lower)
    body = "import {\n%s} from './actions';\n\n" % ''.join('    %s,\n' % n for n in an)
    body += 'export type AmiActions = {\n' + ''.join('    %s: %s;\n' % (n, n) for n in an) + '};\n\n'
    body += 'export type AmiActionType = keyof AmiActions;\n\n'
    body += jsdoc(['@deprecated Every documented action is now in {@link AmiActions}; use {@link AmiActionType}.'])
    body += 'export type _AmiActionType = AmiActionType;\n'
    write(os.path.join(DEFS, 'all.actions.ts'), header() + body)
    print('generated %d actions, %d events (%d from source)' % (
        len(actions), len(events), sum(1 for e in events.values() if e['origin'] == 'source')))


ASTERISK = MAJOR = None

if __name__ == '__main__':
    sys.exit(main())
