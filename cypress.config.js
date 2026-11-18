const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     baseUrl: 'https://the-internet.herokuapp.com/login?utm_source=chatgpt.com',
  },
});
