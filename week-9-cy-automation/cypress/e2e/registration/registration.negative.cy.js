import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import verification from "../../fixtures/verification.json";

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registerButton.click();
  });

  it("Should not register with empty fields", () => {
    registrationPage.registerButton.click();

    Object.values(verification.errorMessages).forEach((error) => {
      registrationPage.fieldsErrorMessages.contains(error).should("be.visible");
    });

  });

  it("Should not register with an already registered email", () => {
    registrationPage.registerExistingUser();
    
    registrationPage.errorMessage.should("have.text", verification.dataValidationFail.error);
  });

});