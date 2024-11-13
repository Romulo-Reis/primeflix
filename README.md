Aqui está o README atualizado com a URL do repositório correta:

---

# Primeflix

![React](https://img.shields.io/badge/React-18.3.1-blue.svg) ![Axios](https://img.shields.io/badge/Axios-1.7.7-blue.svg) ![React Router](https://img.shields.io/badge/React%20Router-6.28.0-blue.svg)

## Descrição

**Primeflix** é uma aplicação web desenvolvida em React que exibe um catálogo de filmes, consumindo dados da API [The Movie Database (TMDb)](https://www.themoviedb.org/). A aplicação permite que os usuários naveguem por diferentes categorias de filmes e visualizem informações detalhadas sobre cada título, proporcionando uma experiência interativa e envolvente.

Este projeto foi criado como parte do curso [**React Js do Zero ao Avançado na Prática**](https://www.udemy.com/share/101ybQ3@JR3RMe9rdQEKcNAasfH409QnfyZimGA3tzLNT0d-fwR5yH7000y5fc8O0BjwlklA/) na plataforma **Udemy**, com o objetivo de aprender e praticar os conceitos de React.

## Funcionalidades

- **Catálogo de filmes** com informações detalhadas de cada título, obtidas diretamente da API TMDb.
- **Navegação entre páginas** com `react-router-dom`.
- **Requisições HTTP** usando `axios` para integrar a API do TMDb.
- **Notificações de feedback** com `react-toastify` para informar o usuário sobre eventos como erros de carregamento.
- **Testes de interface** com `@testing-library/react` e `@testing-library/jest-dom` para garantir a qualidade da aplicação.

## Tecnologias

- **React** - Biblioteca JavaScript para criação de interfaces de usuário.
- **React Router** - Biblioteca para roteamento em aplicativos React de página única.
- **Axios** - Cliente HTTP para fazer chamadas de API.
- **React Toastify** - Biblioteca para exibir notificações.
- **React Testing Library** - Ferramenta de teste para componentes React.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Romulo-Reis/primeflix.git
   cd primeflix
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Obtenha uma chave de API no [TMDb](https://www.themoviedb.org/documentation/api) e configure-a na aplicação (caso o projeto exija configuração manual).

## Scripts

Você pode usar os seguintes comandos para executar o projeto:

- **Iniciar o servidor de desenvolvimento:**

  ```bash
  npm start
  ```

- **Build para produção:**

  ```bash
  npm run build
  ```

- **Rodar testes:**

  ```bash
  npm test
  ```

- **Ejetar a configuração do projeto:**

  ```bash
  npm run eject
  ```

## Estrutura do Projeto

- **`src/`** - Contém o código-fonte principal da aplicação.
- **`public/`** - Contém o HTML base e ativos estáticos.
- **`package.json`** - Gerenciamento de dependências e scripts do projeto.

## Licença

Este projeto está licenciado sob a licença MIT.