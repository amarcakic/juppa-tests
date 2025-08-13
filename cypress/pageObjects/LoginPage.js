class LoginPage {
  visit() { cy.visit('/login'); }
  fillUsername(name) { cy.get('[data-cy=username]').type(name); }
  fillPassword(pass) { cy.get('[data-cy=password]').type(pass); }
  submit() { cy.get('[data-cy=login-button]').click(); }
}
module.exports = new LoginPage();
