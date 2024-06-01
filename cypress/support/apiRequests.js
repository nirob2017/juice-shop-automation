export const createUser = (email, password) => {
    return cy.request({
        method: 'POST',
        url: '/api/Users/',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json'
        },
        body: {
            email: email,
            password: password,
            passwordRepeat: password,
            securityQuestion: {
                id: 2,
                question: "Mother's maiden name?"
            },
            securityAnswer: "Rose"
        }
    });
};

export const loginUser = (email, password) => {
    return cy.request({
        method: 'POST',
        url: '/rest/user/login',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json'
        },
        body: {
            email: email,
            password: password
        }
    });
};

export const addToBasket = (authToken, productId, quantity, basketId) => {
    return cy.request({
        method: 'POST',
        url: '/api/BasketItems/',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: {
            ProductId: productId,
            BasketId: basketId,
            quantity: quantity
        }
    });
};

export const deleteBasketItem = (authToken, basketItemId) => {
    return cy.request({
        method: 'DELETE',
        url: `/api/BasketItems/${basketItemId}`,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Authorization': `Bearer ${authToken}`
        }
    });
};

export const getBasketDetails = (authToken, basketId) => {
    return cy.request({
        method: 'GET',
        url: `/rest/basket/${basketId}`,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Authorization': `Bearer ${authToken}`
        }
    });
};
