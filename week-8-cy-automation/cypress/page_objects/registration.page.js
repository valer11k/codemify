class RegistrationPage {
  get firstNameInput() { return cy.get('[name="firstName"]'); }
  get lastNameInput() { return cy.get('[name="lastName"]'); }
  get emailInput() { return cy.get('[name="email"]'); }
  get passwordInput() { return cy.get('[name="password"]'); }
  get registerButton() { return cy.get('[type="submit"]'); }
  get errorMessage() { return cy.get('[role="alert"]'); }
  get erorMessageText() { return cy.get(".MuiFormHelperText-root.Mui-error"); }

  setFullName(firstName, lastName) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
  }

  setCredentials(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
  }
}

export default new RegistrationPage();