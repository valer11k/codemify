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
    registrationPage.setFullName("Valeriia", "Test")
    registrationPage.setCredentials(email, password)
    registrationPage.registerBtn.click();
    
    dashboardPage.fullNameInput.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");

    // confirm register user can log in

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();
    
    loginPage.login(email,password);
    
    dashboardPage.fullNameInput.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");
  });
});