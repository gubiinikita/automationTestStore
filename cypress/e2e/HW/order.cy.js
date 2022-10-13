///<reference types = "cypress"/>
import user from '../../fixtures/user.json'
import {searchExistingProduct, searchExistingProductPageByPage} from '../../support/helper'

it('Place order via search page by page', () => {
    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

    cy.visit('/');
    searchExistingProduct('I');
    searchExistingProductPageByPage('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15')

    cy.get('#product_quantity').clear().type('4');
    cy.get('.productpagecart').click();

    cy.get('#cart_checkout1').click();

    cy.get('#checkout_btn').click();

    cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed');
    cy.get('.contentpanel').should('contain', 'Thank you for shopping with us!');
});