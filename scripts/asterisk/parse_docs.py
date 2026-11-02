"""Convert resolved Asterisk core-en_US.xml into the JSON model of AMI actions and events.

Usage: python3 -I parse_docs.py <core-resolved.xml> <out.json> <asterisk-tag>

Only the Python standard library is used. <channel_snapshot/> and <bridge_snapshot/> are
expanded here exactly as doc/appdocsxml.xslt does it in Asterisk (xmllint has no XSLT step).
"""
import json
import re
import sys
import xml.etree.ElementTree as ET

CHANNEL_STATE_DESC = ['Down', 'Rsrvd', 'OffHook', 'Dialing', 'Ring', 'Ringing', 'Up', 'Busy',
                      'Dialing Offhook', 'Pre-ring', 'Unknown']
CHANNEL_SNAPSHOT = ['Channel', 'ChannelState', 'ChannelStateDesc', 'CallerIDNum', 'CallerIDName',
                    'ConnectedLineNum', 'ConnectedLineName', 'Language', 'AccountCode', 'Context',
                    'Exten', 'Priority', 'Uniqueid', 'Linkedid']
BRIDGE_SNAPSHOT = ['BridgeUniqueid', 'BridgeType', 'BridgeTechnology', 'BridgeCreator', 'BridgeName',
                   'BridgeNumChannels', 'BridgeVideoSourceMode', 'BridgeVideoSource']
DOC_LIMIT = 600


def text_of(el):
    if el is None:
        return ''
    return re.sub(r'\s+', ' ', ''.join(el.itertext())).strip()


def snapshot_params(kind, prefix):
    names = CHANNEL_SNAPSHOT if kind == 'channel_snapshot' else BRIDGE_SNAPSHOT
    out = []
    for n in names:
        p = {'name': prefix + n, 'required': None, 'enum': None, 'doc': '',
             'snapshot': kind, 'snapshotField': n}
        if n == 'ChannelStateDesc':
            p['enum'] = list(CHANNEL_STATE_DESC)
        elif n == 'BridgeVideoSourceMode':
            p['enum'] = ['none', 'talker', 'single']
        out.append(p)
    return out


def parse_param(p):
    enum = None
    el = p.find('./enumlist')
    if el is None:
        el = p.find('.//enumlist')
    if el is not None:
        enum = [e.get('name') for e in el.findall('./enum') if e.get('name') is not None]
    return {
        'name': p.get('name'),
        'required': p.get('required'),
        'default': p.get('default'),
        'multiple': p.get('multiple'),
        'enum': enum,
        'doc': ' '.join(text_of(x) for x in p.findall('./para'))[:DOC_LIMIT],
    }


def parse_syntax(syn):
    params = []
    if syn is None:
        return params
    for ch in syn:
        if ch.tag == 'parameter':
            params.append(parse_param(ch))
        elif ch.tag in ('channel_snapshot', 'bridge_snapshot'):
            params.extend(snapshot_params(ch.tag, ch.get('prefix') or ''))
        elif ch.tag.endswith('include'):
            raise SystemExit('unresolved xi:include in syntax: %r' % ch.attrib)
    return params


def parse_event(ev, context):
    instances = []
    for inst in ev.findall('./managerEventInstance'):
        instances.append({
            'class': inst.get('class'),
            'module': inst.get('module'),
            'synopsis': text_of(inst.find('./synopsis')),
            'params': parse_syntax(inst.find('./syntax')),
            'seealso': [r.text for r in inst.findall('./see-also/ref')],
        })
    return {'name': ev.get('name'), 'module': ev.get('module'), 'context': context,
            'instances': instances}


def main(src, dst, tag):
    root = ET.parse(src).getroot()
    actions, events, seen_actions = [], [], set()
    in_responses = set()
    for m in root.iter('manager'):
        for e in m.iter('managerEvent'):
            in_responses.add(id(e))
        if m.get('language') not in (None, 'en_US'):
            continue
        # app_voicemail is documented three times (plain, ODBC and IMAP builds); keep the first.
        if m.get('name') in seen_actions:
            continue
        seen_actions.add(m.get('name'))
        resp = m.find('./responses')
        list_events, final_events = [], []
        if resp is not None:
            le = resp.find('./list-elements')
            for e in (le.findall('./managerEvent') if le is not None else []):
                list_events.append(e.get('name'))
                events.append(parse_event(e, 'list:' + m.get('name')))
            for e in resp.findall('./managerEvent'):
                final_events.append(e.get('name'))
                events.append(parse_event(e, 'final:' + m.get('name')))
        actions.append({
            'name': m.get('name'),
            'module': m.get('module'),
            'synopsis': text_of(m.find('./synopsis')),
            'description': ' '.join(text_of(x) for x in m.findall('./description/para'))[:DOC_LIMIT],
            'params': parse_syntax(m.find('./syntax')),
            'listEvents': list_events,
            'finalEvents': final_events,
            'seealso': [r.text for r in m.findall('./see-also/ref')],
        })
    for e in root.iter('managerEvent'):
        if id(e) in in_responses or e.get('language') not in (None, 'en_US'):
            continue
        events.append(parse_event(e, 'top'))
    actions.sort(key=lambda a: a['name'])
    events.sort(key=lambda e: (e['name'], e['context'], e['module'] or ''))
    with open(dst, 'w') as f:
        json.dump({'asterisk': tag, 'actions': actions, 'events': events}, f, indent=1,
                  ensure_ascii=False)
        f.write('\n')
    print('asterisk %s: %d actions, %d event descriptions' % (tag, len(actions), len(events)))


if __name__ == '__main__':
    main(*sys.argv[1:4])
