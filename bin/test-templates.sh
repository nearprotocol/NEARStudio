#!/bin/sh
set -ex

for template in templates/*; do
    (cd $template && yarn && yarn test)
done