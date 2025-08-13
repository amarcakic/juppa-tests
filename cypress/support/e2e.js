// cypress/support/e2e.js

// This is processed and loaded automatically before your test files.
// You can use it to import custom commands or set up global behaviors.

import './commands';

// Example: turn off uncaught exception failures
Cypress.on('uncaught:exception', () => false);
