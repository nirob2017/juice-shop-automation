const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://juice-shop.herokuapp.com/",
    chromeWebSecurity: false,
    watchForFileChanges: false,
    viewportHeight: 1000,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {},
  },
});
