
const config = {
    baseUrl: 'https://studio.nearprotocol.com/contract-api',
    nodeUrl: 'https://studio.nearprotocol.com/devnet',
    contractName: 'near-chess-devnet'
};

if (!Cookies.getJSON('fiddleConfig').nearPages) {
    Cookies.set('fiddleConfig', config);
}