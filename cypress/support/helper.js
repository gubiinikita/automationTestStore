///<reference types = "cypress"/>

export function searchExistingProduct(productName){
    cy.get('#filter_keyword')
    .type(productName)
    .closest('form')
    .submit();
}

export function searchExistingProductPageByPage(productName){
    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get(`[title="${productName}"]`).click();
        }
        else{
            cy.get('.pagination li a').contains('>').click();
            searchExistingProductPageByPage(productName);
        }
    })
    
}