describe('Dashboard Stats', () => {
  it('should display user stats', () => {
    cy.visit('/dashboard');  // uses baseUrl = http://localhost:3000
    cy.get('[data-cy=stats]').should('be.visible');
  });
});
