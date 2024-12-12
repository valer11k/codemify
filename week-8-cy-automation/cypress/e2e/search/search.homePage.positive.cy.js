import featuredListingsPage from "../../page_objects/featured.listings.page";
import homePage from "../../page_objects/home.page";

describe("Search", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
    homePage.switchToDarkMode.click();
  });

  it("Should search by keyword", () => {
    homePage.searchFieldInput.type("Modern House Mill Valley");
    homePage.startSearchButton.click();
    featuredListingsPage.listingTitle.should("have.text", "Modern House Mill Valley");
  });

  it("Should search by bedrooms", () => {
    homePage.setNumbersOfBedrooms();
    homePage.startSearchButton.click();
    featuredListingsPage.moreInfoButton.eq(Math.floor(Math.random() * 5)).click();
    featuredListingsPage.getNumberOfBedrooms.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    homePage.cityFieldInput.type("Mill Valley");
    homePage.startSearchButton.click();
    featuredListingsPage.listingTitle.should("have.text", "Modern House Mill Valley");
    featuredListingsPage.listingCityName.eq(4).should("have.text", " City: Mill Valley");
    featuredListingsPage.oneListingOnPage.should("have.length", 1);
    featuredListingsPage.moreInfoButton.click();

    featuredListingsPage.listingInfo.contains(" Asking Price: $ 700,000").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Square Feet: 1234").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Lot Size: 5600").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Listing Date: 04 December 2024").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Garage: 1").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Bedrooms: 2").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Bathrooms: 2").should("be.visible");
    featuredListingsPage.listingInfo.contains(" Realtor: Realtor Realtor").should("be.visible");
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=600000-700000");
    featuredListingsPage.listingTitle.contains("Modern House Mill Valley").should("be.visible");
    featuredListingsPage.listingPrice.invoke("text").then((priceText) => {
      const price = parseInt(priceText.replace(/[$,]/g, "").trim(), 10);

      cy.wrap(price).should("be.at.least", 600000).and("be.lte", 700000);
    });
 });

});