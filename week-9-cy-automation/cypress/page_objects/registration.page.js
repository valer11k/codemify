class RegistrationPage {
  get firstNameInput() { return cy.get('[name="firstName"]'); }
  get lastNameInput() { return cy.get('[name="lastName"]'); }
  get emailInput() { return cy.get('[name="email"]'); }
  get passwordInput() { return cy.get('[name="password"]'); }
  get registerButton() { return cy.get('[type="submit"]'); }
  get errorMessage() { return cy.get('[role="alert"]'); }
  get fieldsErrorMessages() { return cy.get("p.MuiFormHelperText-root") };
  
  registerUser(firstName, lastName, email,password) {
    if(firstName) {this.firstNameInput.type(firstName)}
    if(lastName) {this.lastNameInput.type(lastName)}
    if(email) {this.emailInput.type(email)}
    if(password) {this.passwordInput.type(password)}
    this.registerButton.click();
  }

  registerExistingUser() {
    cy.fixture('data.json').then((data) => {
      this.firstNameInput.type(data.credentials.firstName)
      this.lastNameInput.type(data.credentials.lastName)
      this.emailInput.type(data.credentials.email)
      this.passwordInput.type(data.credentials.password)
      this.registerButton.click();
    });
    
  }

}

export default new RegistrationPage();