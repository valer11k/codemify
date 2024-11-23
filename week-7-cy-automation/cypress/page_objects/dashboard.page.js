class DashboardPage {
    get fullName() {return cy.get("a h6")};
    get roleType() {return cy.get("a p")};
     
    get personIcon() {return cy.get('button [data-testid="PersonIcon"]')};
    get logoutBtn() {return cy.contains("Logout")};
}

export default new DashboardPage();