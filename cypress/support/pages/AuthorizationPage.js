import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getLoginButton(){
        return cy.get('button[title="Login"]');
    }

    typeTextInLoginField(userName){
        cy.log(`Type username ${userName} in login field`)
        this.getLoginField().type(userName);
    }

    typeTextInPasswordField(password){
        cy.log(`Type password ${password} in password field`)
        this.getPasswordField().type(password);
    }

    submitLoginForm(userName, password){
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }

    checkErrorMessage(userName, password){
        cy.log('Fill login form')
        this.getLoginField().clear().type(userName);
        this.getPasswordField().clear().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();

        cy.log('Check error message')
        cy.get('[class*="alert-error"]').should('contain', "Error: Incorrect login or password provided.")
        cy.get('[data-dismiss="alert"]').click()
    }
}
export default new AuthorizationPage();