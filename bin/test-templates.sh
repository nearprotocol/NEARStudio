#!/bin/sh
set -ex
for template in $(ls -d templates/0*); do
    (cd $template && rm -rf node_modules yarn.lock package-lock && yarn --no-lockfile  && yarn test)
done