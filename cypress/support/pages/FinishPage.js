///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {

    thankYouText: '.complete-header',
    orderDispatchedText: '.complete-text'

 }
 
 //Ações
 class FinishPage {

    validacaoCompraThankYou() {
        cy.get(el.thankYouText).should('contain', 'THANK YOU FOR YOUR ORDER');
    }

    validacaoCompraOrderDispatched() {
        cy.get(el.orderDispatchedText).should('to.be.visible', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
    
 }
 
 export default new FinishPage();