#!/usr/bin/env python
import argparse
import glob
import json
import os
import re


def _template_nearlib_version(nearlib_url):
    if not nearlib_url:
        return
    dir_name = os.path.abspath(os.path.dirname(__file__))
    templates = os.path.join(dir_name, '../templates/**')
    nearlib_regex = r'https://cdn.jsdelivr.net/npm/nearlib@.*/dist/nearlib.js'
    for path in glob.glob(templates, recursive=True):
        if os.path.isdir(path):
            continue

        with open(path, 'r+') as f:
            content = f.read()
            if re.search(nearlib_regex, content) is not None:
                templated = re.sub(nearlib_regex, nearlib_url, content)
                f.seek(0)
                f.write(templated)
                f.truncate()

def generate_config(
        out_file,
        contract_helper_url,
        fiddle_url,
        nearlib_url,
        node_url,
        pages_url,
):
    dir_name = os.path.abspath(os.path.dirname(__file__))
    config_file_path = os.path.join(dir_name, '../config.json')
    with open(config_file_path) as f:
        config = json.loads(f.read())

    config['contractHelper'] = contract_helper_url
    config['fiddle'] = fiddle_url
    config['nodeUrl'] = node_url
    config['pages'] = pages_url
    with open(out_file, 'w') as f:
        f.write(json.dumps(config, indent=4, sort_keys=True))
        f.write('\n')

    _template_nearlib_version(nearlib_url)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--out', required=True, type=str)
    parser.add_argument('--contract-helper-url', required=True, type=str)
    parser.add_argument('--fiddle-url', required=True, type=str)
    parser.add_argument('--nearlib-url', required=True, type=str)
    parser.add_argument('--node-url', required=True, type=str)
    parser.add_argument('--pages-url', required=True, type=str)
    args = parser.parse_args()
    generate_config(
        args.out,
        args.contract_helper_url,
        args.fiddle_url,
        args.nearlib_url,
        args.node_url,
        args.pages_url,
    )
