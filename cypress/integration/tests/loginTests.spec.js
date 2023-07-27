/// <reference types="cypress" />

import LoginPage from "../../support/pages/LoginPage";

describe('Testes de Logins Com Usuários Existentes', () => {

    //O before irá abrir o navegador no site desejado.
    beforeEach(() => {
        cy.visit(Cypress.config().url);
    })

    //Validação de Login com usuário padrão.
    it('Login com usuário: standard_user', () => {
        LoginPage.preencherUsername('standard_user');
        LoginPage.preencherPassword('secret_sauce');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginRealizado();
    })

    //Validação de bloqueio ao realizar login com usuário bloqueado.
    it('Login com usuário: locked_out_user', () => {
        LoginPage.preencherUsername('locked_out_user');
        LoginPage.preencherPassword('secret_sauce');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginUsuárioLocked();
    })

    //Validação de Login com usuário com problemas nas funcionalidades.
    it('Login com usuário: problem_user', () => {
        LoginPage.preencherUsername('problem_user');
        LoginPage.preencherPassword('secret_sauce');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginRealizado();
    })

    //Validação de login com usuário com problemas de performance.
    it('Login com usuário: performance_glitch_user', () => {
        LoginPage.preencherUsername('performance_glitch_user');
        LoginPage.preencherPassword('secret_sauce');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginRealizado();
    })

})

describe('Testes de Logins Inválidos', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().url);
    })

    //Validação de falha ao realizar login faltando preenchimento de usuário e senha.
    it('Login faltando preenchimento de usuário e senha', () => {
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginSemUsernameEPassword();
    })

    //Validação de falha ao realizar login com preenchimento somente de usuário válido e sem senha.
    it('Login com preenchimento de usuário: standard_user, porém sem senha', () => {
        LoginPage.preencherUsername('standard_user');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginSomenteUsername();
    })

    //Validação de falha ao realizar login com preenchimento de usuário e senha inválidos.
    it('Login com preenchimento de usuário: adm7, que é inexistente no sistema', () => {
        LoginPage.preencherUsername('adm7');
        LoginPage.preencherPassword('1234567');
        LoginPage.clicarLogin();
        LoginPage.validacaoLoginUsernameEPasswordInvalidos();
    })
    
})