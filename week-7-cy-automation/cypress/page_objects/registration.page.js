class RegistrationPage{
    get registerLink() {return cy.get('[href="/auth/register"]')};
    get firstNameInput() { return cy.get('[name="firstName"]')};
    get lastNameInput () { return cy.get ('[name="lastName"]')};
    get emailInput () { return cy.get('[name="email"]')};
    get passwordInput () { return cy.get('[name="password"]')};
    get registerBtn () {return cy.get ('[type="submit"]')};


    get personIconBtn() {return cy.get('button [data-testid="PersonIcon"]')};

    get errorMessage () {return cy.get ('[role="alert"]').should("have.text", "Input data validation failed")};

    login(email, password){
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }

    fullName(firstName, lastName) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
    }

}

export default new RegistrationPage;