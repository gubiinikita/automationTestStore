import BasePage from "./BasePage";

class OrderCreation extends BasePage {
    createOrder() {
        cy.log('**Creating new order**');
        cy.get('#product_quantity').clear().type('4');
        cy.get('.productpagecart').click();

        cy.get('#cart_checkout1').click();

        cy.get('#checkout_btn').click();

        cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed');
        cy.get('.contentpanel').should('contain', 'Thank you for shopping with us!');
    }
}
export default new OrderCreation();