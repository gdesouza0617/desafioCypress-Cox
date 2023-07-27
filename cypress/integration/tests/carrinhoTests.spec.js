/// <reference types="cypress" />

import CarrinhoPage from "../../support/pages/CarrinhoPage";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";

describe('Teste de Validações ao Acrescentar e Remover Produtos do Carrinho de Compras', () =>{

    //O before irá abrir o navegador no site desejado e após isso fazer o login com o usuário padrão.
    beforeEach(() => {
        cy.visit(Cypress.config().url);
        LoginPage.loginUsuarioPadraoStandardUser();
    })

    //Validação no número apresentado no carrinho ao acrescentar 1 produto.
    it('Adicionando e validando a adição de 1 produto no carrinho de compras', () => {
        ProductsPage.clicarAdicaoCarrinhoItem1();
        ProductsPage.validacaoNumeroCarrinhoCompras('1')
    })

    //Validação no número apresentado no carrinho ao acrescentar 2 produtos.
    it('Adicionando e validando a adição de 2 produtos no carrinho de compras', () => {
        ProductsPage.clicarAdicaoCarrinhoItem2();
        ProductsPage.validacaoNumeroCarrinhoCompras('2')
    })

    //Validação na remoção de 2 produtos do carrinho de compras
    it('Validando a remoção de 2 produtos do carrinho de compras', () => {
        ProductsPage.clicarCarrinho();
        CarrinhoPage.clicarRemoverProduto1();
        CarrinhoPage.clicarRemoverProdutoUnico();
        CarrinhoPage.clicarContinueShopping();
        ProductsPage.validacaoCarrinhoComprasVazio();
    })
    
})