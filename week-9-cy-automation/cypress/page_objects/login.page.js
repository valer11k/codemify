class LoginPage {
  get emailInput() { return cy.get('[name="email"]'); }
  get passwordInput() { return cy.get('[name="password"]'); }
  get loginButton() { return cy.get('button[type="submit"]'); }
  get signInText() { return cy.get("h4.MuiTypography-root"); }

  login(email = "valeriiatest1@gmail.com", password = "123456") {
    this.emailInput.type(email); 
    this.passwordInput.type(password); 
    this.loginButton.click(); 
  }
}

export default new LoginPage();