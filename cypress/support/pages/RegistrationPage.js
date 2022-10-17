import BasePage from "./BasePage";
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

class RegistrationPage extends BasePage {
    visit() {
        cy.log('**Open sign up page**');
        cy.visit('/');
        cy.get('#customer_menu_top').click();
        cy.get('#accountFrm button').click();
    }

    fillUpRegistrationForm() {
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
    }

    checkGreetingMessage() {
        cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!');
    }
}
export default new RegistrationPage();