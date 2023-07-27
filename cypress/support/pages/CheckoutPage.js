///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {

    firstNameField: '[data-test=firstName]',
    lastNameField: '[data-test=lastName]',
    zipPostalCodeField: '[data-test=postalCode]',
    cancelButton: '.cart_cancel_link',
    continueButton: '.btn_primary',
    mensagemValidacaoErroText: '[data-test=error]'
    
 }
 
 //Ações
 class CheckoutPage {

    preencherFirstName(firstName) {
        cy.get(el.firstNameField).type(firstName);
    }

    preencherLastName(lastName) {
        cy.get(el.lastNameField).type(lastName);
    }

    preencherZipPostalCode(zipPostalCode) {
        cy.get(el.zipPostalCodeField).type(zipPostalCode);
    }

    clicarCancel() {
        cy.get(el.cancelButton).click();
    }

    clicarContinue() {
        cy.get(el.continueButton).click();
    }

    validacaoCheckoutFirstNameErro() {
        cy.get(el.mensagemValidacaoErroText).should('contain', 'Error: First Name is required');
    } 

    validacaoCheckoutLastNameErro() {
        cy.get(el.mensagemValidacaoErroText).should('contain', 'Error: Last Name is required');
    } 

    validacaoCheckoutPostalCodeErro() {
        cy.get(el.mensagemValidacaoErroText).should('contain', 'Error: Postal Code is required');
    } 

 }

 export default new CheckoutPage(); 