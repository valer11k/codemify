import registrationPage from "../../page_objects/registration.page";
import credentials from "../../page_objects/credentials.json";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    registrationPage.registerLink.click();
    registrationPage.fullName(credentials.name, credentials.lastName);
    registrationPage.login(email, password);
    registrationPage.registerBtn.click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.url().should("include", "/dashboard/user/profile");

    // confirm new register user can log in

    registrationPage.personIconBtn.click();
    cy.contains("Logout").click();

    registrationPage.login(email, password);
    cy.contains("Login").click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
  });
});