describe('API Healthcheck', () => {
  it('should return 200 OK', () => {
    cy.request(`${Cypress.env('apiUrl')}/api/health`).its('status').should('eq', 200);
  });
});
