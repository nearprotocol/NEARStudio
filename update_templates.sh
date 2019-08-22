#!/bin/bash
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -euxo pipefail

TEMPLATE_DIRS="$(ls -d templates/0*)"

for template in $TEMPLATE_DIRS; do
  (cd $template; yarn install && rm -rf node_modules/.bin)
  for package in $(ls -d $template/node_modules/*); do
    if [ ! -d $package/assembly ]; then
      rm -rf $package;
    fi
  done
done