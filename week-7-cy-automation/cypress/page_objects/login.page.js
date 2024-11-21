class LoginPage{
    get loginLink() {return cy.get('[href="/auth/login"]')};
    get emailInput () {return cy.get('[name="email"]')};
    get passwordInput () {return cy.get('[name="password"]')};
    get loginButton () {return cy.get('button[type="submit"]')};
    get personIconBtn() {return cy.get('button [data-testid="PersonIcon"]')};
}

export default new LoginPage