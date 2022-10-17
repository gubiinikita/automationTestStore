///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';

it.skip('Authorization', () => {
  authorizationPage.visit();

  authorizationPage.submitLoginForm(user.userName, user.password);

  accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");

  cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
});

it.skip('Test inheritance', () => {
  authorizationPage.visit();

  authorizationPage.performSearch('i');
});

it('Authorization errors', () => {
  authorizationPage.visit();

  authorizationPage.checkErrorMessage('!./\%|', user.password)
  authorizationPage.checkErrorMessage(' ', ' ')
  authorizationPage.checkErrorMessage(user.userName, 'hehe')
  authorizationPage.checkErrorMessage('hehe', user.password)
})