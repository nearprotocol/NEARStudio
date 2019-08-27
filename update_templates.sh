#!/bin/bash
# See https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -euxo pipefail

TEMPLATE_DIRS="$(ls -d templates/0*)"

for template in $TEMPLATE_DIRS; do
  echo $template
  cp ./templates/setup.js $template/setup.js
  (cd $template && (rm yarn.lock || true) && yarn install --prod)
  rm -rf $template/node_modules.bk;
  mkdir $template/node_modules.bk
  for package in $(ls -d $template/node_modules/*); do
    if [ -d $package/assembly ]; then
      parent=$(basename $package)
      echo $parent
      mkdir $template/node_modules.bk/$parent;
      cp -r ./$template/node_modules/$parent/assembly $template/node_modules.bk/$parent/
      # TODO use list files to only copy files needed to compile
      # for file in $(./node_modules/.bin/asc --listFiles assembly/index.ts --baseDir ./$package 2>&1 > /dev/null | grep -v \~lib); do
      #   cp -p ./$template/node_modules/$parent/$file ./$template/node_modules.bk/$parent/$file
      # done
    fi
  done
  rm -rf $template/node_modules;
  mv $template/node_modules.bk $template/node_modules;
done