import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => { 
    it("Should login and logout", () => { 
      cy.visit("/");
  
      homePage.loginBtn.click();
      loginPage.login("valeriiaTest@gmail.com", "123456");
  
      dashboardPage.fullName.should("have.text", "Valeriia  Test");
      dashboardPage.roleType.should("have.text", "role: user");
        
      dashboardPage.personIcon.click();
      dashboardPage.logoutBtn.click();

      loginPage.signInText.should("be.visible");
    });
  }); 