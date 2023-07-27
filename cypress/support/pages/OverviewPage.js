///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {
    
    paymentInformationText: '.summary_info > :nth-child(2)',
    shippingInformationText: '.summary_info > :nth-child(4)',
    itemTotalText: '.summary_subtotal_label',
    taxText: '.summary_tax_label',
    totalText: '.summary_total_label',
    cancelButton: '.cart_cancel_link',
    finishButton: '.btn_action'

 }
 
 //Ações
 class OverviewPage {
 
    validacaoPaymentInformation(payInfo) {
         cy.get(el.paymentInformationText).should('contain', payInfo);
     }

    validacaoShippingInformation(shippingInfo) {
        cy.get(el.shippingInformationText).should('contain', shippingInfo);
    }

    validacaoItemTotal(itemTotal) {
        cy.get(el.itemTotalText).should('contain', itemTotal);
    }

    validacaoTax(tax) {
        cy.get(el.taxText).should('contain', tax);
    }

    validacaoTotal(total) {
        cy.get(el.totalText).should('contain', total);
    }

    clicarCancel() {
        cy.get(el.cancelButton).click();
    }

    clicarFinish() {
        cy.get(el.finishButton).click();
    }

 }
 
 export default new OverviewPage();