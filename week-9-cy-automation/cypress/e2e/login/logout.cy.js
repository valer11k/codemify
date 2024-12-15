import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import verification from "../../fixtures/verification.json";

describe("Login", () => {
  it("Should logout", () => {
    cy.visit("/");

    homePage.loginButton.click();
    loginPage.login();

    dashboardPage.fullNameInput.should("have.text", verification.dashboard.fullName);
    dashboardPage.roleType.should("have.text", verification.dashboard.role);

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    loginPage.signInText.should("have.text", verification.login.signInText);
  });
  
});