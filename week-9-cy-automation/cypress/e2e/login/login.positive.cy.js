import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import verification from "../../fixtures/verification.json";

describe("Login", () => {
  it("Should login", () => {
    cy.visit("/");
    homePage.loginButton.click();
    loginPage.login();

    dashboardPage.fullNameInput.should("have.text", verification.dashboard.fullName);
    dashboardPage.roleType.should("have.text", verification.dashboard.role);
  });
  
});