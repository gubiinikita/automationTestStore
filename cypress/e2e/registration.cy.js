///<reference types = "cypress"/>
import RegistrationPage from '../support/pages/RegistrationPage';

it('Reg', () => {
  cy.log("**Open registration page**")
  RegistrationPage.visit();

  cy.log("**Fill up the registration form**")
  RegistrationPage.fillUpRegistrationForm();

  cy.log("**Verify thank you message**");
  RegistrationPage.checkGreetingMessage();
})

