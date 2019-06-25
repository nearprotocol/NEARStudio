#!/bin/bash
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -euxo pipefail
echo templates/*/assembly | xargs -n 1 -t cp node_modules/near-runtime-ts/near.ts

JSON_DIRS="$(echo templates/*/assembly | xargs -n 1 printf "%s/json\n")"
for dir in $JSON_DIRS; do
    mkdir -p "$dir"
    cp -R node_modules/assemblyscript-json/assembly/{encoder,decoder}.ts "$dir"
done

BIGNUM_DIRS="$(echo templates/*/assembly | xargs -n 1 printf "%s/bignum\n")"
for dir in $BIGNUM_DIRS; do
    mkdir -p "$dir"
    mkdir -p "$dir/integer"
    cp -R node_modules/bignum/assembly/*.ts "$dir"
    cp -R node_modules/bignum/assembly/integer/*.ts "$dir/integer"
done
