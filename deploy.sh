#!/bin/sh
rsync -rva -z4  --exclude node_modules --exclude .git ./ near-studio:/var/www/html
