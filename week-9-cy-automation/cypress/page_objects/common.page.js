class CommonPage {
    get searchFieldInput() { return cy.contains(".MuiFormControl-root label", "Search").parent().find("input"); }
    get cityFieldInput() { return cy.contains(".MuiFormControl-root label", "City").parent().find("input"); }
    get startSearchButton() { return cy.contains("Start Search"); }
    get bedroomsDropdown() { return cy.contains(".MuiFormControl-root label", "Bedrooms").parent().find('[aria-haspopup="listbox"]'); }
    get selectNumberOfBedrooms() { return cy.get('[role="listbox"]'); }
    get getNumberOfBedrooms() { return cy.get(".MuiGrid-root").contains("Bedrooms:").invoke("text").then((text) => parseInt(text.replace(/\D/g, ""), 10)); }
    get listingPrice() { return cy.get(".MuiBox-root.css-6yrxxf"); }

    setNumbersOfBedrooms() {
      this.bedroomsDropdown.click();
      this.selectNumberOfBedrooms.contains("2+").click();
    }

    getListingPrice() {
        return this.listingPrice
        .invoke("text") 
        .then((priceText) => {
        return parseInt(priceText.replace(/[$,]/g, "").trim(), 10); 
      });
    }
  }
  
  export {CommonPage};