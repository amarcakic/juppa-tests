const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // frontend base URL for cy.visit()
    env: {
      apiUrl: 'http://localhost:5000' // backend base URL for API requests
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Node event listeners if needed
    }
  },
  retries: 2,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false, // JSON only first
    json: true
  }
});
