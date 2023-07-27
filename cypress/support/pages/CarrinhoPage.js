///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {
    
    removerProdutoUnicoButton: '.item_pricebar > .btn_secondary',
    removerProduto1Button: ':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary',
    removerProduto2Button: ':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary',
    removerProduto3Button: ':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary',
    removerProduto4Button: ':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary',
    removerProduto5Button: ':nth-child(7) > .cart_item_label > .item_pricebar > .btn_secondary',
    removerProduto6Button: ':nth-child(8) > .cart_item_label > .item_pricebar > .btn_secondary',
    checkoutButton: '.btn_action',
    continueShoppingButton: '.cart_footer > .btn_secondary'

 }
 
 //Ações
 class CarrinhoPage {

    clicarRemoverProdutoUnico() {
        cy.get(el.removerProdutoUnicoButton).click();
    }

    clicarRemoverProduto1() {
        cy.get(el.removerProduto1Button).click();
    }

    clicarRemoverProduto2() {
        cy.get(el.removerProduto2Button).click();
    }

    clicarRemoverProduto3() {
        cy.get(el.removerProduto3Button).click();
    }

    clicarRemoverProduto4() {
        cy.get(el.removerProduto4Button).click();
    }

    clicarRemoverProduto5() {
        cy.get(el.removerProduto5Button).click();
    }

    clicarRemoverProduto6() {
        cy.get(el.removerProduto6Button).click();
    }

    clicarCheckout() {
        cy.get(el.checkoutButton).click();
    }

    clicarContinueShopping() {
        cy.get(el.continueShoppingButton).click();
    }

 }

 export default new CarrinhoPage(); 