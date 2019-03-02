/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

import getConfig from "../../src/config";

function mockFetchToReturnConfig() {
  const config = require("../../config.json");
  (global as any).fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => config
  }));
  return () => (global as any).fetch = undefined;
}

describe("Tests for getConfig", () => {
  it("should load the config from config.json", async () => {
    const restoreFetch = mockFetchToReturnConfig();
    await expect(getConfig()).resolves.toEqual({
      cargo: "//webassembly-studio-rust.herokuapp.com/cargo",
      clang: "//webassembly-studio-clang.herokuapp.com/build",
      contractHelper: "https://studio.nearprotocol.com/contract-api",
      nodeUrl: "https://studio.nearprotocol.com/devnet",
      walletUrl: "https://wallet.nearprotocol.com",
      fiddle: "https://studio.nearprotocol.com/api",
      pages: "https://app.near.ai",
      rustc: "//webassembly-studio-rust.herokuapp.com/rustc",
      sentryDNS: "https://f0026a55fffa4d2f9d1efa5a6b2ca1ad@sentry.io/1326370",
      serviceUrl: "//wasmexplorer-service.herokuapp.com/service.php",
      templates: {
        arc: "/dist/arc-templates/index.js",
        default: "/dist/templates/index.js"
      }
    });
    expect((global as any).fetch).toHaveBeenCalledWith("./config.json");
    restoreFetch();
  });
  it("should return the config if it is already loaded", async () => {
    const restoreFetch = mockFetchToReturnConfig();
    await getConfig();
    expect((global as any).fetch).not.toHaveBeenCalled();
    restoreFetch();
  });
});
