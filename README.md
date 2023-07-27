## Créditos

O que foi feito:

- Criado 18 scripts de testes

- Casos de teste foram executados no navegador padrão do Cypress, o Electron

- Utilizado o padrão PageObjects para construção das pages

## Arquitetura do Projeto - Cypress

- Interpretador Js - [Node.js - 18.17.0](https://nodejs.org/en/download)

- Ambiente de desenvolvimento - [Visual Studio Code](https://code.visualstudio.com)

- Linguagem de desenvolvimento - [JavaScript](https://www.javascript.com)

- Ferramenta de testes automatizados - [Cypress - 3.6.0](http://cypress.io)

## Executar o projeto

 1. Install Node JS
 2. Instalar Cypress 3.6.0 (npm install cypress@3.6.0)
 3. Install VSCode

1º Forma - Abrir o VSCode com o projeto e no terminal digitar o comando:

    npm run cypress:run

2º Forma - Abrir o VSCode com o projeto e no terminal digitar o comando:

    npm run cypress:open
    
    Ao abrir a janela do cypress, clicar no botão: Run all specs
    
## Arquitetura:

-  `integration:` Local onde ficam os testes que foram realizados
-  `support:` Local onde fica as  `pages`  e `locators` que estarão no mesmo arquivo
-  `videos:` Local onde são salvos vídeos dos testes executados
-  `cypress.json:` Arquivo onde se encontra a url que iremos utilizar para realizar nossos testes
-  `package-lock.json:` Arquivo que estão informações detalhadas sobre as dependências utilizadas no projeto
-  `package.json:` Arquivo que armazena informações, configurações e scripts de execuções do projeto
  
## Testes Funcionais:
Configurando cypress.json:

Inserido no cypress.json a url que iremos utilizar:

    {
     "url":"https://www.saucedemo.com/v1/
    }