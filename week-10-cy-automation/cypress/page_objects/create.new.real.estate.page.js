class createNewRealEstatePage {
    get listingTitleField() { return cy.get('[name="title"]'); }
    get listingDescriptionField() { return cy.get('[name="description"]'); }
    get listingCityField() { return cy.get('[name="city"]'); }
    get listingAddressField() { return cy.get ('[name="address"]'); }
    get listingZipCodeField() { return cy.get ('[name="zipCode"]'); }
    get listingStateField() { return cy.get ('[aria-haspopup="listbox"]'); }
    get selectState() {return cy.contains('California'); }
    get listingAddImage() { return cy.get ('.MuiBox-root.css-1mmtv2s'); }
    get listingsetPublishToggle() {return cy.get ('[name="isPublished"]'); }
    get listingPriceField() {return cy.get ('[name="price"]'); }
    get listingBedroomsField() { return cy.get ('[name="bedrooms"]'); }
    get listingBathroomsField() { return cy.get ('[name="bathrooms"]'); }
    get listingGarageField() {return cy.get ('[name="garage"]'); }
    get listingSqftField() { return cy.get ('[name="sqft"]'); }
    get listingLotSizeField() {return cy.get ('[name="lotSize"]'); }
    get postButton() { return cy.get('[type="submit"]'); }
}

export default new createNewRealEstatePage();