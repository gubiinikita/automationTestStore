///<reference types = "cypress"/>
import user from '../fixtures/user.json'
import {searchExistingProduct,  searchExistingProductPageByPage} from '../support/helper'
import authorizationPage from '../support/pages/AuthorizationPage';
import OrderCreation from '../support/pages/OrderCreation';

beforeEach(()=> {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
})

it('Place order', () => {
    cy.visit('/index.php?rt=product/product&product_id=52');
    OrderCreation.createOrder();
});

it('Place order via search', () => {
    cy.visit('/');

    searchExistingProduct('Benefit Bella Bamba');
    OrderCreation.createOrder();
});

it('Place order via search page by page', () => {
    cy.visit('/');
    searchExistingProduct('I');
    searchExistingProductPageByPage('Fiorella Purple Peep Toes')
    OrderCreation.createOrder();
});
