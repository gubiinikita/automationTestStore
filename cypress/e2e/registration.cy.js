describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type('FirstName');
    cy.get('#AccountFrm_lastname').type('LastName');
    cy.get('#AccountFrm_email').type('wetmilk@email.com');
    cy.get('#AccountFrm_address_1').type('address1');
    cy.get('#AccountFrm_city').type('city');
    cy.get('#AccountFrm_zone_id').select(1);
    cy.get('#AccountFrm_postcode').type('123');
    cy.get('#AccountFrm_country_id').select('United Kingdom');;
    cy.get('#AccountFrm_loginname').type('username123231');
    cy.get('#AccountFrm_password').type('qwer123');
    cy.get('#AccountFrm_confirm').type('qwer123');
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();

    cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')

  })
})