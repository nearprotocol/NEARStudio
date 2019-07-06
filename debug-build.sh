#!/bin/bash
set -x
cat ./templates/01-hello-username/assembly/near.ts | grep bignum
cat ./build/dist/templates/01-hello-username/assembly/near.ts | grep bignum
cat ./node_modules/near-runtime-ts/near.ts | grep bignum
