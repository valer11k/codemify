import loginPage from "../../page_objects/login.page";
import credentials from "../../page_objects/credentials.json";

describe("Login and Logout", () => { 
  it("Should login and logout", () => { 
    cy.visit("/");

    loginPage.loginLink.click();
    loginPage.emailInput.type(credentials.email);
    loginPage.passwordInput.type(credentials.password);
    loginPage.loginButton.click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
    cy.url().should("include", "/dashboard/user/profile");

    loginPage.personIconBtn.click();
    cy.contains("Logout").click();

    cy.url().should("include", "/auth/login");
    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
}); 


