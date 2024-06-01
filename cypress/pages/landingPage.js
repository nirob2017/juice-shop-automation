class LandingPage {
  visit() {
    cy.visit("/");
  }

  closeDialog() {
    cy.get(".close-dialog").click();
  }

  searchForItem(item) {
    cy.get(".mat-search_icon-search").click();
    cy.get("#mat-input-0").type(`${item} {enter}`);
  }

  verifySearchResults() {
    cy.get(".mat-grid-tile-content > .mat-card").should("contain", "Apple");
    cy.get(".mat-grid-tile-content > .mat-card").should("have.length", 2);
  }
}

export default LandingPage;
