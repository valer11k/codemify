describe("Login", () => { 
    it("Should login and logout", () => { 
      cy.visit("/");
  
      cy.get('[href="/auth/login"]').click();
      cy.get('[name="email"]').type("valeriiatest@gmail.com");
      cy.get('[name="password"]').type("123456");
      cy.get('button[type="submit"]').click();
  
      cy.get("a h6").should("have.text", "Valeriia  Test");
      cy.get("a p").should("have.text", "role: user");
        
      cy.get('button [data-testid="PersonIcon"]').click();
      cy.contains("Logout").click();

      cy.contains("Sign in to Delek Homes").should("be.visible");
    });
  }); 