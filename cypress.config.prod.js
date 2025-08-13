const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://prod.example.com',
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.js'
  },
  retries: 1
});
