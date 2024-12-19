import { CommonPage } from "./common.page";

class FeaturedListingsPage extends CommonPage {
  get moreInfoButton() { return cy.get(".MuiBox-root.css-xi606m"); }
  get listingTitle() { return cy.get(".MuiGrid-root h5"); }
  get listingCityName() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6"); }
  get oneListingOnPage() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4"); }
  get listingInfo() { return cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6"); }
}

export default new FeaturedListingsPage();