module.exports = {
  seedTestData() {
    cy.request('POST', '/api/test-data/seed');
  },
  resetTestData() {
    cy.request('POST', '/api/test-data/reset');
  }
};
