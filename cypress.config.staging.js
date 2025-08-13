const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.example.com',
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.js'
  },
  retries: 2
});
