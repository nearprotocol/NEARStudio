#!/bin/bash
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -euxo pipefail
echo templates/*/assembly | xargs -n 1 -t cp node_modules/near-runtime-ts/near.ts
# TODO: JSON decoder update disabled for now because of compiler issues
#JSON_DIRS="$(echo templates/*/assembly | xargs -n 1 printf "%s/json\n")"
#echo "$JSON_DIRS" | xargs -n 1 -t mkdir -p
#echo "$JSON_DIRS" | xargs -n 1 -t cp -R node_modules/assemblyscript-json/assembly/{encoder,decoder}.ts
