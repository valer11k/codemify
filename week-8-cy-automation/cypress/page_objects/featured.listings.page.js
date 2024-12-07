class FeaturedListingsPage {
  get searchFieldInput() {
    return cy.contains(".MuiFormControl-root label", "Search").parent().find("input"); }
  get cityFieldInput() { return cy.contains(".MuiFormControl-root label", "City").parent().find("input"); }
  get startSearchBtn() { return cy.contains("Start Search"); }
  get moreInfoBtn() { return cy.get(".MuiBox-root.css-xi606m"); }
  get listingTitle() { return cy.get(".MuiGrid-root h5"); }
  get listingCityName() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6"); }
  get bedroomsDropdown() { return cy.contains(".MuiFormControl-root label", "Bedrooms").parent().find('[aria-haspopup="listbox"]'); }
  get selectNumberOfBedrooms() { return cy.get('[role="listbox"]'); }
  get getNumberOfBedrooms() { return cy.get(".MuiGrid-root").contains("Bedrooms:").invoke("text").then((text) => parseInt(text.replace(/\D/g, ""), 10)); }
  get oneListingOnPage() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4"); }
  get listingInfo() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6"); }
  get listingPrice() { return cy.get(".MuiBox-root.css-6yrxxf"); }

  setNumbersOfBedrooms() {
    this.bedroomsDropdown.click();
    this.selectNumberOfBedrooms.contains("2+").click();
  }
}

export default new FeaturedListingsPage();
