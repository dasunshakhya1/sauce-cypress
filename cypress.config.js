import { defineConfig } from "cypress";

const configs =  defineConfig({

  e2e: {
    testIsolation: false,
    baseUrl:"https://www.saucedemo.com/v1",
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
    },
  },
});

export default configs;