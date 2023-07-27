/// <reference types="cypress" />

import OverviewPage from "../../support/pages/OverviewPage"
import CarrinhoPage from "../../support/pages/CarrinhoPage";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import FinishPage from "../../support/pages/FinishPage";

describe('Teste de Compras', () =>{

    //O before irá abrir o navegador no site desejado e após isso fazer o login com o usuário padrão.
    beforeEach(() => {
        cy.visit(Cypress.config().url);
        LoginPage.loginUsuarioPadraoStandardUser();
    })

    //Validação na compra de 1 item aleatório da plataforma - No caso o escolhido foi o Item 2.
    it('Compra de 1 item aleatório da plataforma - Item 2', () => {
        ProductsPage.clicarAdicaoCarrinhoItem2();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName("Gabriel");
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.preencherZipPostalCode('04547-005');
        CheckoutPage.clicarContinue();
        OverviewPage.validacaoPaymentInformation('SauceCard #31337');
        OverviewPage.validacaoShippingInformation('FREE PONY EXPRESS DELIVERY!');
        OverviewPage.validacaoItemTotal('$9.99');
        OverviewPage.validacaoTax('$0.80');
        OverviewPage.validacaoTotal('$10.79');
        OverviewPage.clicarFinish();
        FinishPage.validacaoCompraThankYou();
        FinishPage.validacaoCompraOrderDispatched();
    })

    //Validação na compra do 1º item na ordem alfabética A-Z após ordenação na combobox.
    it('Compra do 1º item na ordem alfabética de A-Z', () => {
        ProductsPage.clicarOrdemProdutosNameAToZ();
        ProductsPage.validacaoProduto1OrdemAlfabeticaAZ();
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName("Gabriel");
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.preencherZipPostalCode('04547-005');
        CheckoutPage.clicarContinue();
        OverviewPage.validacaoPaymentInformation('SauceCard #31337');
        OverviewPage.validacaoShippingInformation('FREE PONY EXPRESS DELIVERY!');
        OverviewPage.validacaoItemTotal('$29.99');
        OverviewPage.validacaoTax('$2.40');
        OverviewPage.validacaoTotal('$32.39');
        OverviewPage.clicarFinish();
        FinishPage.validacaoCompraThankYou();
        FinishPage.validacaoCompraOrderDispatched();
    })
    
    //Validação na compra do 1º item na ordem alfabética Z-A após ordenação na combobox.
    it('Compra do 1º item na ordem alfabética de Z-A', () => {
        ProductsPage.clicarOrdemProdutosNameZToA();
        ProductsPage.validacaoProduto1OrdemAlfabeticaZA();
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName("Gabriel");
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.preencherZipPostalCode('04547-005');
        CheckoutPage.clicarContinue();
        OverviewPage.validacaoPaymentInformation('SauceCard #31337');
        OverviewPage.validacaoShippingInformation('FREE PONY EXPRESS DELIVERY!');
        OverviewPage.validacaoItemTotal('$15.99');
        OverviewPage.validacaoTax('$1.28');
        OverviewPage.validacaoTotal('$17.27');
        OverviewPage.clicarFinish();
        FinishPage.validacaoCompraThankYou();
        FinishPage.validacaoCompraOrderDispatched();
    })

    //Validação na compra do 1º item na ordem de preço Low-High após ordenação na combobox.
    it('Compra do 1º item na ordem de preço - Low-High', () => {
        ProductsPage.clicarOrdemProdutosPriceLowToHigh();
        ProductsPage.validacaoProduto1OrdemPrecoLoHi();
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName("Gabriel");
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.preencherZipPostalCode('04547-005');
        CheckoutPage.clicarContinue();
        OverviewPage.validacaoPaymentInformation('SauceCard #31337');
        OverviewPage.validacaoShippingInformation('FREE PONY EXPRESS DELIVERY!');
        OverviewPage.validacaoItemTotal('$7.99');
        OverviewPage.validacaoTax('$0.64');
        OverviewPage.validacaoTotal('$8.63');
        OverviewPage.clicarFinish();
        FinishPage.validacaoCompraThankYou();
        FinishPage.validacaoCompraOrderDispatched();
    })

    //Validação na compra do 1º item na ordem de preço High-Low após ordenação na combobox.
    it('Compra do 1º item na ordem de preço - High-Low', () => {
        ProductsPage.clicarOrdemProdutosPriceHighToLow();
        ProductsPage.validacaoProduto1OrdemPrecoHiLo();
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarCheckout();
        CheckoutPage.preencherFirstName("Gabriel");
        CheckoutPage.preencherLastName('Feijão');
        CheckoutPage.preencherZipPostalCode('04547-005');
        CheckoutPage.clicarContinue();
        OverviewPage.validacaoPaymentInformation('SauceCard #31337');
        OverviewPage.validacaoShippingInformation('FREE PONY EXPRESS DELIVERY!');
        OverviewPage.validacaoItemTotal('$49.99');
        OverviewPage.validacaoTax('$4.00');
        OverviewPage.validacaoTotal('$53.99');
        OverviewPage.clicarFinish();
        FinishPage.validacaoCompraThankYou();
        FinishPage.validacaoCompraOrderDispatched();
    })

})