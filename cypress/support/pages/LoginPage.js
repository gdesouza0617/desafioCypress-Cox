///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {

   usernameField: '[id=user-name]',
   passwordField: '[id=password]',
   loginButton: '#login-button',
   productsText: '.product_label',
   erroLoginText: '[data-test=error]'

}

//Ações
class LoginPage {

    preencherUsername(username)  {
        cy.get(el.usernameField).type(username);
    }

    preencherPassword(password) {
        cy.get(el.passwordField).type(password);
    }

    clicarLogin() {
        cy.get(el.loginButton).click();
    }

    validacaoLoginRealizado() {
        cy.url().should('equal', 'https://www.saucedemo.com/v1/inventory.html');
        cy.get(el.productsText).should('contain', 'Products');
    } 

    validacaoLoginUsuárioLocked() {
        cy.get(el.erroLoginText).should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    } 

    validacaoLoginSemUsernameEPassword() {
        cy.get(el.erroLoginText).should('contain', 'Epic sadface: Username is required');
    } 

    validacaoLoginSomenteUsername() {
        cy.get(el.erroLoginText).should('contain', 'Epic sadface: Password is required');
    } 

    validacaoLoginUsernameEPasswordInvalidos() {
        cy.get(el.erroLoginText).should('contain', 'Epic sadface: Username and password do not match any user in this service');
    }
    
    loginUsuarioPadraoStandardUser() {
        cy.get(el.usernameField).type('standard_user');
        cy.get(el.passwordField).type('secret_sauce');
        cy.get(el.loginButton).click();
    }

}

export default new LoginPage();