class DashboardPage {
  get fullNameInput() { return cy.get("a h6"); }
  get roleType() { return cy.get("a p"); }
  get personIcon() { return cy.get('button.MuiButtonBase-root'); }
}

export default new DashboardPage();