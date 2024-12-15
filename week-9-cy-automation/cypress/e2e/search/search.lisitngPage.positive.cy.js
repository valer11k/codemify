import featuredListingsPage from "../../page_objects/featured.listings.page";
import homePage from "../../page_objects/home.page";
import data from "../../fixtures/data.json";
import verification from "../../fixtures/verification.json";

describe("Search", () => {
  beforeEach( () => {
    cy.visit("/");
    homePage.switchToDarkMode.click();
  });

  it("Should search by keyword", () => {
    homePage.searchFieldInput.type(data.listing.title);
    featuredListingsPage.startSearchButton.click();

    featuredListingsPage.listingTitle.should("have.text", verification.listing.title);
  });

  it("Should search by bedrooms", () => {
    featuredListingsPage.setNumbersOfBedrooms();
    featuredListingsPage.startSearchButton.click();
    featuredListingsPage.moreInfoButton.eq(Math.floor(Math.random() * 5)).click();

    featuredListingsPage.getNumberOfBedrooms.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    featuredListingsPage.searchFieldInput.type(data.listing.city);
    featuredListingsPage.startSearchButton.click();

    featuredListingsPage.listingTitle.should("have.text", verification.listing.title);
    featuredListingsPage.listingCityName.eq(4).should("have.text", verification.listing.city);
    featuredListingsPage.oneListingOnPage.should("have.length", 1);
    
    featuredListingsPage.moreInfoButton.click();

    verification.listingDetails.forEach((text) => {
      featuredListingsPage.listingInfo.contains(text).should("be.visible");
    });

  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=600000-700000");
    featuredListingsPage.listingTitle.contains(data.listing.city).should("be.visible");
    featuredListingsPage.getListingPrice().should("be.at.least", 600000).and("be.lte", 700000);
    });

});