import registrationPage from "../../page_objects/registration.page";
import credentials from "../../page_objects/credentials.json";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register without filling in required fields", () => {
    registrationPage.registerLink.click();
    registrationPage.registerBtn.click();

    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

  it("Should not register with an already existing email account", () => {
    registrationPage.registerLink.click();
    registrationPage.fullName(credentials.name, credentials.lastName);
    registrationPage.login(email, password);
    registrationPage.registerBtn.click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "/dashboard/user/profile");

    registrationPage.personIconBtn.click();
    cy.contains("Logout").click();

    registrationPage.registerLink.click();
    registrationPage.fullName(credentials.name, credentials.lastName);
    registrationPage.login(email, password);
    registrationPage.registerBtn.click();

    cy.get('[role="alert"]').should(
      "have.text",
      "Input data validation failed"
    );
  });
});