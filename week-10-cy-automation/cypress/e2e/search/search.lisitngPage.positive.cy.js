import featuredListingsPage from "../../page_objects/featured.listings.page";
import homePage from "../../page_objects/home.page";
import listingDetails from "../../fixtures/listingDetails.json"
import userCredentials from "../../fixtures/userCredentials.json";

let listingId; 

describe("Search", () => {
  before(() => {
    cy.loginApi(userCredentials.email, userCredentials.password);
    cy.createListing(listingDetails).then((id) => {
      listingId = id; 
    });
  });

  beforeEach(() => {
    cy.visit("/");
    homePage.switchToDarkMode.click(); 
  });

  after(() => {
      cy.deleteListing(listingId)
    });

  it("Should search by keyword", () => {
    homePage.searchFieldInput.type(listingDetails.title);
    featuredListingsPage.startSearchButton.click();

    featuredListingsPage.listingTitle.should("have.text", listingDetails.title);
  });

  it("Should search by bedrooms", () => {
    featuredListingsPage.setNumbersOfBedrooms();
    featuredListingsPage.startSearchButton.click();
    featuredListingsPage.moreInfoButton.eq(Math.floor(Math.random() * 5)).click();

    featuredListingsPage.getNumberOfBedrooms.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    featuredListingsPage.searchFieldInput.type(listingDetails.city);
    featuredListingsPage.startSearchButton.click();

    featuredListingsPage.listingTitle.should("have.text", listingDetails.title);
    featuredListingsPage.listingCityName.eq(4).invoke("text").should("include", listingDetails.city);
    featuredListingsPage.oneListingOnPage.should("have.length", 1);
    
    featuredListingsPage.moreInfoButton.click();

    listingDetails.listingInfo.forEach((text) => {
      featuredListingsPage.listingInfo.contains(text).should("be.visible");
    });

  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=600000-700000");
    featuredListingsPage.listingTitle.contains(listingDetails.city).should("be.visible");
    featuredListingsPage.getListingPrice().should("be.at.least", 600000).and("be.lte", 700000);
    });

});