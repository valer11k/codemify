describe("Login", () => {
  it("Should login", () => {
    cy.visit("/");

    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("valeriiatest@gmail.com");
    cy.get('[name="password"]').type("123456");
    cy.get('button[type="submit"]').click();

    cy.get("a h6").should("have.text", "Valeriia  Test");
    cy.get("a p").should("have.text", "role: user");
  });
});
