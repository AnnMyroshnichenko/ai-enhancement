const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultBrowser: 'chrome',
  e2e: {
    baseUrl: 'https://modivo.ua/',
    projectId: "m2q4xn",
    setupNodeEvents(on, config) {

    },
  },
});
