describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login", () => {
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("valeriiatest@gmail.com");
    cy.get('[name="password"]').type("123456");
    cy.contains("Login").click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "/dashboard/user/profile");
  });
});
