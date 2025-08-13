class DashboardPage {
  visit() { cy.visit('/dashboard'); }
  getStats() { return cy.get('[data-cy=stats]'); }
}
module.exports = new DashboardPage();
