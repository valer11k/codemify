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
    homePage.registerButton.click(); 
  });

  it.only("Should not register with empty field", () => {
    registrationPage.registerButton.click();

    registrationPage.erorMessageText.contains("First name required").should("be.visible");
    registrationPage.erorMessageText.contains("Last name required").should("be.visible");
    registrationPage.erorMessageText.contains("Email is required").should("be.visible");
    registrationPage.erorMessageText.contains("Password is required").should("be.visible");
  });

  it("Should not register with an already registered email account", () => {
    registrationPage.setFullName("Valeriia", "Test")
    registrationPage.setCredentials(email, password);
    registrationPage.registerButton.click();

    dashboardPage.fullNameInput.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    cy.visit("/");
    homePage.registerButton.click();

    registrationPage.setFullName("Valeriia", "Test")
    registrationPage.setCredentials(email, password);
    registrationPage.registerButton.click();
   
    registrationPage.errorMessage.should("have.text", "Input data validation failed");
  });

});