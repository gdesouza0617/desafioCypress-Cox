///<reference types="Cypress"/>

//Mapeamento de Elementos
const el = {

    carrinhoButton: '.svg-inline--fa',
    menuOpcoesButton: '.bm-burger-button > button',
    menuOpcoesAllItemsLink: '#inventory_sidebar_link',
    menuOpcoesAboutLink: '#about_sidebar_link',
    menuOpcoesLogoutLink: '#logout_sidebar_link',
    menuOpcoesResetAppStateLink: '#reset_sidebar_link',
    ordemProdutosCombobox: '.product_sort_container',
    adicaoCarrinhoItem1Button: ':nth-child(1) > .pricebar > .btn_primary',
    adicaoCarrinhoItem2Button: ':nth-child(2) > .pricebar > .btn_primary',
    adicaoCarrinhoItem3Button: ':nth-child(3) > .pricebar > .btn_primaryl',
    adicaoCarrinhoItem4Button: ':nth-child(4) > .pricebar > .btn_primary',
    adicaoCarrinhoItem5Button: ':nth-child(5) > .pricebar > .btn_primary',
    adicaoCarrinhoItem6Button: ':nth-child(6) > .pricebar > .btn_primary',
    produto1OrdemAlfabeticaAZText: '#item_4_title_link > .inventory_item_name',
    produto1OrdemAlfabeticaZAText: '#item_3_title_link > .inventory_item_name',
    produto1OrdemPrecoLoHiText: '#item_2_title_link > .inventory_item_name',
    produto1OrdemPrecoHiLoText: '#item_5_title_link > .inventory_item_name',
    numeroCarrinhoComprasText: '.fa-layers-counter',
    removeProdutoCarrinhoButton: '.btn_secondary'

 }
 
 //Ações
 class ProductsPage {

    clicarCarrinho() {
        cy.get(el.carrinhoButton).click();
    }

    clicarMenuOpcoes() {
        cy.get(el.menuOpcoesButton).click();
    }

    clicarMenuOpcoesAllItems() {
        cy.get(el.menuOpcoesAllItemsLink).click();
    }

    clicarMenuOpcoesAbout() {
        cy.get(el.menuOpcoesAboutLink).click();
    }

    clicarMenuOpcoesLogout() {
        cy.get(el.menuOpcoesLogoutLink).click();
    }

    clicarMenuOpcoesResetAppState() {
        cy.get(el.menuOpcoesResetLink).click();
    }

    clicarOrdemProdutosNameAToZ() {
        cy.get(el.ordemProdutosCombobox).select('az');
    }

    clicarOrdemProdutosNameZToA() {
        cy.get(el.ordemProdutosCombobox).select('za');
    }

    clicarOrdemProdutosPriceLowToHigh() {
        cy.get(el.ordemProdutosCombobox).select('lohi');
    }

    clicarOrdemProdutosPriceHighToLow() {
        cy.get(el.ordemProdutosCombobox).select('hilo');
    }

    clicarAdicaoCarrinhoItem1() {
        cy.get(el.adicaoCarrinhoItem1Button).click();
    }

    clicarAdicaoCarrinhoItem2() {
        cy.get(el.adicaoCarrinhoItem2Button).click();
    }

    clicarAdicaoCarrinhoItem3() {
        cy.get(el.adicaoCarrinhoItem3Button).should('to.be.visible').click();
    }

    clicarAdicaoCarrinhoItem4() {
        cy.get(el.adicaoCarrinhoItem4Button).click();
    }

    clicarAdicaoCarrinhoItem5() {
        cy.get(el.adicaoCarrinhoItem5Button).click();
    }

    clicarAdicaoCarrinhoItem6() {
        cy.get(el.adicaoCarrinhoItem6Button).click();
    }

    validacaoProduto1OrdemAlfabeticaAZ() {
        cy.get(el.produto1OrdemAlfabeticaAZText).should('contain', 'Sauce Labs Backpack');
    }

    validacaoProduto1OrdemAlfabeticaZA() {
        cy.get(el.produto1OrdemAlfabeticaZAText).should('contain', 'Test.allTheThings() T-Shirt (Red)');
    }

    validacaoProduto1OrdemPrecoLoHi() {
        cy.get(el.produto1OrdemPrecoLoHiText).should('contain', 'Sauce Labs Onesie');
    }

    validacaoProduto1OrdemPrecoHiLo() {
        cy.get(el.produto1OrdemPrecoHiLoText).should('contain', 'Sauce Labs Fleece Jacket');
    }

    validacaoNumeroCarrinhoCompras(numero) {
        cy.get(el.numeroCarrinhoComprasText).should('contain', numero);
    }

    validacaoCarrinhoComprasVazio() {
        cy.get(el.numeroCarrinhoComprasText).should('not.be.visible');
    }

    clicarRemoveProdutoCarrinho() {
        cy.get(el.removeProdutoCarrinhoButton).click();
    }

 }

 export default new ProductsPage();