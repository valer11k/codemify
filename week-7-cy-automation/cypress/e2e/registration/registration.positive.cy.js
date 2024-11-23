import { faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import loginPage from "../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerBtn.click();
    registrationPage.fullName("Valeriia", "Test")
    registrationPage.credentials(email, password)
    registrationPage.registerBtn.click();
    
    dashboardPage.fullName.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");

    // confirm register user can log in

    dashboardPage.personIcon.click();
    dashboardPage.logoutBtn.click();
    
    loginPage.credentials(email,password);
    loginPage.loginButton.click();

    dashboardPage.fullName.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");
  });
});