#!/bin/sh
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -euxo pipefail
echo templates/*/assembly | xargs -n 1 cp node_modules/near-runtime-ts/near.ts
echo templates/*/assembly/json | xargs -n 1 cp -R node_modules/assemblyscript-json/assembly/*
