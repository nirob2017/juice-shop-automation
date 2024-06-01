import { makeRandomString, generateRandomNumber } from '../support/utils';

class LoginBasketAndSearchPage {
  visitLogin() {
    cy.visit("/#/login");
  }

  login(email, password) {
    cy.get("#email").type(email);
    cy.get("#password").type(password).wait(100);
    cy.get("#loginButton").click();
  }

  addItemToBasket() {
    cy.get("button").contains("Add to Basket").click();
  }

  openBasket() {
    cy.contains("Your Basket").click({ force: true }).wait(500);
  }

  verifyBasket() {
    cy.get("app-basket > mat-card > app-purchase-basket").should("exist");
  }

  proceedToCheckout() {
    cy.reload();
    cy.get("#checkoutButton").click();
  }

  addNewAddress() {
    cy.get("div.ng-star-inserted > .mat-focus-indicator").first().click();
  }

  fillAddressForm() {
    cy.get("#mat-input-1").type(makeRandomString(8));
    cy.get("#mat-input-2").type(makeRandomString(8));
    cy.get("#mat-input-3").type(generateRandomNumber(8));
    cy.get("#mat-input-4").type(makeRandomString(8));
    cy.get("#address").type(makeRandomString(8));
    cy.get("#mat-input-6").type(makeRandomString(8));
    cy.get("#mat-input-7").type(makeRandomString(8));
  }

  submitAddress() {
    cy.get("#submitButton > .mat-button-wrapper").click();
  }

  verifySubmission() {
    cy.get("h1.ng-star-inserted").should("exist");
  }
}

export default LoginBasketAndSearchPage;
