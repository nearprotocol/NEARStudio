#!/bin/sh
set -ex
(cd templates; npm install)
for template in $(ls -d templates/* | grep -v node_modules); do
    (cd $template && rm -rf node_modules yarn.lock package-lock && yarn && yarn test)
done