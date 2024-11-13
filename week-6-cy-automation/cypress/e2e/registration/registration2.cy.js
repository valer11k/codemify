import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();

    cy.get("#\\:r1\\:-helper-text").should("have.text", "First name required");

    cy.get("#r2:-helper-text").should("have.text", "Last name required");
  });
});
