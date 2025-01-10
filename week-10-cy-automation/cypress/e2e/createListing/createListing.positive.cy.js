import userCredentials from "../../fixtures/userCredentials.json";
import createNewRealEstatePage from "../../page_objects/create.new.real.estate.page";
import listingDetails from "../../fixtures/listingDetails.json"
import homePage from "../../page_objects/home.page";
import featuredListingsPage from "../../page_objects/featured.listings.page";

let listingId

describe("Create a new listing", () => {
  afterEach(() => {
    cy.url().then((url) => {
      const listingId = url.split("/").pop(); 
      cy.deleteListing(listingId); 
    });
  });

  it("Verify Admin can create a new listing", () => {
    cy.loginApi(userCredentials.email, userCredentials.password);
    cy.visit("/dashboard/real-estate/new");
    
    createNewRealEstatePage.listingTitleField.type(listingDetails.title);
    createNewRealEstatePage.listingDescriptionField.type(listingDetails.description);
    createNewRealEstatePage.listingCityField.type(listingDetails.city);
    createNewRealEstatePage.listingAddressField.type(listingDetails.address);
    createNewRealEstatePage.listingZipCodeField.type(listingDetails.zipCode);
    createNewRealEstatePage.listingStateField.type(listingDetails.state);
    createNewRealEstatePage.selectState.click();
    createNewRealEstatePage.listingAddImage.attachFile("images/house.jpg", { subjectType: 'drag-n-drop' });
    createNewRealEstatePage.listingsetPublishToggle.click();
    createNewRealEstatePage.listingPriceField.type(listingDetails.price);
    createNewRealEstatePage.listingBedroomsField.type(listingDetails.bedrooms);
    createNewRealEstatePage.listingBathroomsField.type(listingDetails.bathrooms);
    createNewRealEstatePage.listingGarageField.type(listingDetails.garage);
    createNewRealEstatePage.listingSqftField.type(listingDetails.sqft);
    createNewRealEstatePage.listingLotSizeField.type(listingDetails.lotSize);
    createNewRealEstatePage.postButton.click();

    cy.visit("/");
    homePage.searchFieldInput.type(listingDetails.title); 
    homePage.startSearchButton.click();
    featuredListingsPage.moreInfoButton.eq(0).click();

    cy.url().then((url) => { listingId = url.split("/").pop(); });
  
    listingDetails.listingInfo.forEach((text) => {
    featuredListingsPage.listingInfo.contains(text).should("be.visible");});
  });

});