(function () {
  let params = new URL(window.location).searchParams;
  let keyStore = new nearlib.keyStores.InMemoryKeyStore();
  nearConfig.contractName = params.get('contractName') || nearConfig.contractName;
  keyStore.setKey(nearConfig.networkId, nearConfig.contractName, nearlib.KeyPair.fromString(params.get('privateKey')));
  nearConfig.deps = { keyStore };
})();
