///<reference types = "cypress"/>
import {faker} from '@faker-js/faker';

let user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCode(),
  countryId: 'United Kingdom',
  loginName: faker.internet.userName(),
  password: faker.internet.password(15),
}


// it('passes', () => {
//   cy.visit('/')

//   cy.get('#customer_menu_top').click();
//   cy.get('#accountFrm button').click();

//   cy.get('#AccountFrm_firstname').type('FirstName');
//   cy.get('#AccountFrm_lastname').type('LastName');
//   cy.get('#AccountFrm_email').type('wetmilk@email.com');
//   cy.get('#AccountFrm_address_1').type('address1');
//   cy.get('#AccountFrm_city').type('city');
//   cy.get('#AccountFrm_zone_id').select(1);
//   cy.get('#AccountFrm_postcode').type('123');
//   cy.get('#AccountFrm_country_id').select('United Kingdom');;
//   cy.get('#AccountFrm_loginname').type('username123231');
//   cy.get('#AccountFrm_password').type('qwer123');
//   cy.get('#AccountFrm_confirm').type('qwer123');
//   cy.get('#AccountFrm_newsletter0').click();
//   cy.get('#AccountFrm_agree').check();
//   cy.get('button[title="Continue"]').click();

//   cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')
// })


it('Reg', () => {
  cy.visit('/')

  cy.log("**Open registration page**")
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm button').click();

  cy.log("**Fill up the registration form**")
  cy.get('#AccountFrm_firstname').type(user.firstName);
  cy.get('#AccountFrm_lastname').type(user.lastName);
  cy.get('#AccountFrm_email').type(user.email);
  cy.get('#AccountFrm_address_1').type(user.address);
  cy.get('#AccountFrm_city').type(user.city);
  cy.get('#AccountFrm_zone_id').select(1);
  cy.get('#AccountFrm_postcode').type(user.zipCode);
  cy.get('#AccountFrm_country_id').select(user.countryId);;
  cy.get('#AccountFrm_loginname').type(user.loginName);
  cy.get('#AccountFrm_password').type(user.password);
  cy.get('#AccountFrm_confirm').type(user.password);
  cy.get('#AccountFrm_newsletter0').click();
  cy.get('#AccountFrm_agree').check();
  cy.get('button[title="Continue"]').click();

  cy.log("**Verify thank you message**");
  cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!');




})

