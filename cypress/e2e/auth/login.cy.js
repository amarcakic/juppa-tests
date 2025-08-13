describe('Login', () => {
  it('should log in successfully @smoke', () => {
    cy.visit('/');
    cy.get('[data-cy=username]').type('user1');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/dashboard');
  });
});
