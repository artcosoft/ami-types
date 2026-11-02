#!/usr/bin/env bash
# Build the Asterisk XML documentation for a release tag and convert the AMI part
# into scripts/asterisk/data/docs-ami.json (the input of generate.py).
#
# Usage: scripts/asterisk/extract-docs.sh <asterisk-tag> [existing-asterisk-checkout]
#   e.g. scripts/asterisk/extract-docs.sh 22.11.0
#
# Requires: git, bash, awk, sed, xmllint, python3. Asterisk does not need to be compiled:
# only its documentation extractor (build_tools/make_xml_documentation) is run.
set -euo pipefail

tag="${1:?usage: $0 <asterisk-tag> [asterisk-checkout]}"
here="$(cd "$(dirname "$0")" && pwd)"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

if [ -n "${2:-}" ]; then
    src="$(cd "$2" && pwd)"
else
    src="$work/asterisk"
    git clone -q --depth 1 --branch "$tag" https://github.com/asterisk/asterisk.git "$src"
fi

# make_xml_documentation only checks that makeopts exists (it is produced by ./configure).
[ -f "$src/makeopts" ] || touch "$src/makeopts"

(
    cd "$src"
    ./build_tools/make_xml_documentation --command=create_xml --source-tree=. \
        --mod-subdirs="channels pbx apps codecs formats cdr cel bridges funcs main res addons" \
        --with-moduleinfo --output-file=doc/core-en_US.xml
)
# xi:include elements reference other parts of the same document; resolve them.
# Run from doc/ so the relative appdocsxml.dtd reference resolves.
(cd "$src/doc" && xmllint --xinclude --noent --nonet core-en_US.xml) > "$work/core-resolved.xml"

python3 -I "$here/parse_docs.py" "$work/core-resolved.xml" "$here/data/docs-ami.json" "$tag"
