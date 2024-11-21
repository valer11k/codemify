import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with empty field", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();

    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

  it("Should not register with an already registered email account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Valeriia");
    cy.get('[name="lastName"]').type("Test");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.url().should("include", "/dashboard/user/profile");

    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Valeriia");
    cy.get('[name="lastName"]').type("Test");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get('[role="alert"]').should(
      "have.text",
      "Input data validation failed"
    );
  });
});