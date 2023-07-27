/// <reference types="cypress" />

import CarrinhoPage from "../../support/pages/CarrinhoPage";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import CheckoutPage from "../../support/pages/CheckoutPage";

describe('Teste de Validações no Checkout', () =>{

    //O before irá abrir o navegador no site desejado e após isso fazer o login com o usuário padrão.
    beforeEach(() => {
        cy.visit(Cypress.config().url);
        LoginPage.loginUsuarioPadraoStandardUser();
    })

    //Validação de bloqueio na compra de item sem preenchimento de informações no checkout.
    it('Tentativa de compra de item sem informações no checkout', () => {
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.clicarContinue();
        CheckoutPage.validacaoCheckoutFirstNameErro();
    })

    //Validação de bloqueio na compra de item que contém somente o First Name preenchido.
    it('Tentativa de compra de item somente com First Name preenchido', () => {
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName('Gabriel');
        CheckoutPage.clicarContinue();
        CheckoutPage.validacaoCheckoutLastNameErro();
    })

    //Validação de bloqueio na compra de item faltando o Zip/Postal Code.
    it('Tentativa de compra de item faltando o Zip/Postal Code', () => {
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName('Gabriel');
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.clicarContinue();
        CheckoutPage.validacaoCheckoutPostalCodeErro();
        CheckoutPage.clicarCancel();
        CarrinhoPage.clicarRemoverProdutoUnico();
    })

})