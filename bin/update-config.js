const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
config.nodeUrl = process.env.REACT_APP_NODE_URL || config.nodeUrl;
config.contractHelper = process.env.REACT_APP_ACCOUNT_HELPER_URL || config.contractHelper;
config.fiddle = process.env.FIDDLE_API_URL || config.fiddle;
config.pages = process.env.FIDDLE_PAGES_URL || config.pages;
fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
