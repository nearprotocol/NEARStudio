# NEAR Guest Book

Implements simple guest book with NEAR DevNet wallet integration.

To checkout out wallet go to: http://wallet.nearprotocol.com

See: 
- `assembly/main.ts` for contract code
- `assembly/model.ts` for data structures
- `src/main.js` for wallet integration and contract use with `nearlib`
- `src/index.html` for HTML part


To run from nearstudio: click run. 

To run on a local devnet:
Click "Download" and unarchive to disk. From the archive directory,
```
yarn
yarn build
yarn deploy -- --contract guestbook
```
