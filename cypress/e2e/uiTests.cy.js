/// <reference types="cypress" />

import RegistrationPage from '../pages/registrationPage';
import LandingPage from '../pages/landingPage';
import LoginBasketAndSearchPage from '../pages/loginBasketAndAddressPage';
import { makeRandomString } from '../support/utils';

describe("UI Automation tests of JUICE SHOP.", () => {
  const email = `${makeRandomString(5)}@test.com`;
  const password = makeRandomString(8);

  const registrationPage = new RegistrationPage();
  const loginAndBasketPage = new LoginBasketAndSearchPage();
  const landingPage = new LandingPage();

  before("Register a new user", () => {
    registrationPage.visit();
    registrationPage.closeDialog();
    registrationPage.fillRegistrationForm(email, password);
    registrationPage.submit();
    registrationPage.verifyRegistration();
  });

  it("Login with your user, add 1 item to the basket, click on checkout, add a new address, fill in the address form, click on submit", () => {
    loginAndBasketPage.visitLogin();
    loginAndBasketPage.login(email, password);
    loginAndBasketPage.addItemToBasket();
    loginAndBasketPage.openBasket();
    loginAndBasketPage.verifyBasket();
    loginAndBasketPage.proceedToCheckout();
    loginAndBasketPage.addNewAddress();
    loginAndBasketPage.fillAddressForm();
    loginAndBasketPage.submitAddress();
    loginAndBasketPage.verifySubmission();
  });

  it("Verify search button, search for apple, verify that 2 apple products show up and that banana product doesn't show up", () => {
    landingPage.visit();
    landingPage.closeDialog();
    landingPage.searchForItem('Apple');
    landingPage.verifySearchResults();
  });
});
