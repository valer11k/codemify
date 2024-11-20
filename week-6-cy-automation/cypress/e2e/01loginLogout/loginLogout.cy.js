describe("Login and Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login", () => {
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("valeriiatest@gmail.com");
    cy.get('[name="password"]').type("123456");
    cy.contains("Login").click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "/dashboard/user/profile");
  });

  it("Should logout after login", () => {
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("valeriiatest@gmail.com");
    cy.get('[name="password"]').type("123456");
    cy.contains("Login").click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "/dashboard/user/profile");

    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.url().should("include", "/auth/login");
    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
});
