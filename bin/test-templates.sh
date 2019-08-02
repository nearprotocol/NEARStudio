#!/bin/sh
set -ex

for template in templates/*; do
    (cd $template && rm -rf node_modules yarn.lock && yarn && yarn test)
done