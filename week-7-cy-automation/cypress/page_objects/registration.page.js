class RegistrationPage{
    get firstNameInput() { return cy.get('[name="firstName"]')};
    get lastNameInput() { return cy.get ('[name="lastName"]')};
    get emailInput() { return cy.get('[name="email"]')};
    get passwordInput() { return cy.get('[name="password"]')};
    get registerBtn() {return cy.get ('[type="submit"]')};

    get errorMessage() {return cy.get ('[role="alert"]')};
    get firstNameError() {return cy.contains("First name required")};
    get lastNameError() {return cy.contains("Last name required")};
    get emailError() {return  cy.contains("Email is required")};
    get passwordError() {cy.contains("Password is required")};


    fullName(firstName, lastName) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
    }
   
    credentials(email, password){
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }

}

export default new RegistrationPage;