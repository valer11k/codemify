import { CommonPage } from "./common.page";

class Homepage extends CommonPage {
  get loginButton() { return cy.get('[href="/auth/login"]'); }
  get registerButton() { return cy.get('[href="/auth/register"]'); }
  get switchToDarkMode() { return cy.get('.MuiBox-root [type="checkbox"]'); }
}

export default new Homepage();