# Crud de usuários em Angular v17

Um CRUD feito no framework Angular versão 17.

## Configurando Firebase

Para rodar este projeto, você precisa configurar o Firebase:

1. Acesse [Firebase Console](https://console.firebase.google.com/).
2. Crie um novo projeto.
3. Vá em "Criação" e crie um "Firestore Database".
4. Vá em "Configurações do Projeto" > "Geral" > "Seus aplicativos" e crie um novo app a partir do npm.
5. Copie os dados de configuração do seu "firebaseConfig"
6. Vá no arquivo `src/environments/environment.example.ts` e preencha os dados no campo "firebaseConfig".
7. Renomeie o arquivo `environment.example.ts` para `environment.ts`.

## Rodando a aplicação

Clone este repositório em sua máquina e navegue até ele, rode o comando `ng serve` ou `ng s`, após isso vá ate seu navegador e digite o link: `http://localhost:4200`.

## Ferramentas utilizadas

- Bootstrap
- Angular Material UI
- Firestore Database


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

