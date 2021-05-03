# Título do projeto

Bons Drinks - Seu Proximo drink se encontra aqui.

## 🚀 Começando

Esse projeto React foi criado com o propósito de servir como base para um site utilizando DOM e react-router-dom para a atualização das páginas
e funcionalidades do site.

Nele, é possível ao usuário navegar por drinks através da utilização uma API que ao ser acessada atualiza a visualização da página sem necessidade de recarregar o site ou abrir nova aba.
O site utiliza somente uma pagina que ao selecionar os links realiza a atualização do DOM de visualização do usuário sem necessidade de abertura de novas guias ou qualquer outro tipo de ação, aprimorando o desempenho do site. 


### 📋 Pré-requisitos

Dependencias:

    @testing-library/jest-dom: ^5.11.9
    @testing-library/react: ^11.2.5
    @testing-library/user-event: ^12.6.3
    node-fetch: ^2.6.1
    react: ^17.0.1
    react-dom: ^17.0.1
    react-router-dom: ^5.2.0
    react-scripts: 4.0.2
    web-vitals: ^1.1.0

### 🔧 Instalação

1. Realize o Download de todos os arquivos disponiveis no repositorio : https://github.com/ericwdw/Bons-Drinks

2. Em seu editor de codigo, instale as dependecias descritas na secao desse arquivo "Dependencias" utilizando o NPM

3. Execute o comando "npm start" em seu terminal para a inicializacao do react.

4.O site estara disponivel para visualização no servidor local na rota http://localhost:3000 

### 🔧 Funcionalidades

1. Pagina http://localhost:3000/drinks/buscarDrink

    - Utilizando o banco de dados do https://www.thecocktaildb.com/, o usuario pode pesquisar no campo de input o nome de algum drink
    - O resultado da busca sera exibido apos o click no botao de busca
    - O resultado sera exibido na pagina atraves da atualização do DOM sem necessidade de acao adicional do usuario.

2. Pagina http://localhost:3000/contato

   - Disponibiliza um formulário com campos para a inserção de texto e envio dos dados.
   - Após o clique no botão, o mesmo modifica a interface para mostrar que ocorreu uma ação após o click
   - O formulário não está conectado ao banco de dados, portanto, os dados não são salvos.

### ⚙️ Requisicoes de rotas:

O site utiliza uma requisição do tipo GET para receber os dados do banco de dados da API disponível em: "https://www.thecocktaildb.com"

## 🛠️ Construído com

- [VSCode](https://code.visualstudio.com/) - O editor de codigo
- [NPM](https://www.npmjs.com/) - Gerente de pacotes
- [React] (https://pt-br.reactjs.org/) - Criador de interfaces de usuário

## 📌 Versão

O projeto encontra-se na versao 1.0.0

## ✒️ Autores

- Eric Gomes Silva Abrunhosa - Desenvolvimento & Documentação - (https://github.com/ericwdw)