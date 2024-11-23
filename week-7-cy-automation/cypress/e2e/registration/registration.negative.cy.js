import { faker } from "@faker-js/faker";
import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registerBtn.click(); 
  });

  it("Should not register with empty field", () => {
    registrationPage.registerBtn.click();

    registrationPage.firstNameError.should("be.visible");
    registrationPage.lastNameError.should("be.visible");
    registrationPage.emailError.should("be.visible");
    registrationPage.passwordError.should("be.visible");
  });

  it("Should not register with an already registered email account", () => {
    registrationPage.fullName("Valeriia", "Test")
    registrationPage.credentials(email,password);
    registrationPage.registerBtn.click();

    dashboardPage.fullName.should("have.text", "Valeriia  Test");
    dashboardPage.roleType.should("have.text", "role: user");

    dashboardPage.personIcon.click();
    dashboardPage.logoutBtn.click();

    cy.visit("/");
    registrationPage.registerBtn.click();

    registrationPage.fullName("Valeriia", "Test")
    registrationPage.credentials(email,password);
    registrationPage.registerBtn.click();
   
    registrationPage.errorMessage.should("have.text", "Input data validation failed");
  });
});