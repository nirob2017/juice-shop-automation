import {
  createUser,
  loginUser,
  addToBasket,
  deleteBasketItem,
  getBasketDetails,
} from "../support/apiRequests";
import { makeRandomString } from "../support/utils";

describe("API Automation tests of JUICE SHOP", () => {
  let authToken;
  let basketItemId1;
  let basketItemId2;
  let basketId;
  const email = makeRandomString(6);
  const password = makeRandomString(8);

  before("Register and Sign in with user", () => {
    createUser(email, password).then(() => {
      loginUser(email, password).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.authentication.token).to.exist;
        authToken = response.body.authentication.token;
        basketId = response.body.authentication.bid;
      });
    });
  });

  it("Add 1 item to the basket, verify that 1 item is in the basket", () => {
    cy.log("Add one item to the basket.");
    addToBasket(authToken, 1, 1, basketId).then((response) => {
      expect(response.body.status).to.equal("success");

      cy.log("Verify basket has one item.");
      getBasketDetails(authToken, basketId).then((basketResponse) => {
        basketItemId1 = basketResponse.body.data.Products[0].BasketItem.id;
        expect(basketResponse.body.status).to.equal("success");
        expect(
          basketResponse.body.data.Products[0].BasketItem.BasketId
        ).to.equal(basketId);
        expect(basketResponse.body.data.Products).to.have.lengthOf(1);
        cy.log("Delete item from the basket.");
        deleteBasketItem(authToken, basketItemId1).then((deleteResponse) => {
          expect(deleteResponse.body.status).to.equal("success");
        });
      });
    });
  });

  it("Add 2 items to the basket, delete 1 item and validate that only 1 item remains in the basket", () => {
    cy.log("Add one item to the basket.");
    addToBasket(authToken, 1, 1, basketId).then((response1) => {
      expect(response1.body.status).to.equal("success");
      basketId = response1.body.data.BasketId;

      cy.log("Add another item to the basket.");
      addToBasket(authToken, 6, 1, basketId).then((response2) => {
        expect(response2.body.status).to.equal("success");
        basketItemId2 = response2.body.data.id;

        getBasketDetails(authToken, basketId).then((res) => {
          cy.log("Verify basket has two items.");
          expect(res.body.data.Products).to.have.lengthOf(2);
          basketItemId1 = res.body.data.Products[0].BasketItem.id;

          cy.log("Delete one item from the basket.");
          deleteBasketItem(authToken, basketItemId1).then((deleteResponse) => {
            expect(deleteResponse.body.status).to.equal("success");

            cy.log("Verify basket has one items.");
            getBasketDetails(authToken, basketId).then(
              (updatedBasketResponse) => {
                expect(
                  updatedBasketResponse.body.data.Products
                ).to.have.lengthOf(1);
                expect(
                  updatedBasketResponse.body.data.Products[0].BasketItem.id
                ).to.equal(basketItemId2);
              }
            );
          });
        });
      });
    });
  });
});
