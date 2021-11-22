<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Uma API REST com um CRUD simples de médicos de um hospital

Nome: Julio Teruyuki Noguchi Andres

Ferramenta escolhida:
  - Node.JS
    - NestJS
    - TypeScript
    - Sequelize
  - MySQL

## Dificuldades

- Essa foi meu primeiro desenvolvimento na pratica em NestJS, então tive muita dificuldade em aproveitar dele 100%
- Não conhecia muito bem a ORM Sequelize, então não consegui criar uma estrutura no banco mais funcional
- Não consegui implementar testes unitarios por não conhecer docker compose muito bem

## Requisitos para Rodar API

Node.js: <a href="https://nodejs.org/pt-br/">https://nodejs.org/pt-br/<a>
MySQL: <a href="https://dev.mysql.com/downloads/installer/">https://dev.mysql.com/downloads/installer/<a>

.env: Criar um arquivo ".env" para colocar as configurações do banco de dados
  - Exemplo:

    ```bash
    USER_BANCO=root
    SENHA_BANCO=exemplo_senha
    PORTA_BANCO=3306
    ```


## Comandos Para Rodar API
MySQL Command Line Client: <code>create database hospital;</code>

```bash
$ npm install
```

## Rodar API

```bash
$ npm run start
```

## Requisitos
  - Estar no padrão REST <b>(FEITO)</b>
  - Criar mecanismo de busca por todos os campos do cadastro do médico, incluindo o endereço <b>(FEITO)</b>
  - Utilizar ferramenta de validação (exemplo: YUP) <b>(FEITO)</b>
  - Funções especialistas (Realizam somente uma operação) <b>(FEITO)</b>
  - Para documentação e requisição utilizar o Postman, Insomnia ou Swagger (Enviar junto com o teste o workspace utilizado) <b>(FEITO)</b>
  - Subir o código em repositório público do GitHub <b>(FEITO)</b>
  - Criar arquivo docker compose para avaliação do teste (ATENÇÃO: Sem esse arquivo seu teste não será executado) <b>(NÃO FEITO)</b>
  - Testes unitários <b>(NÃO FEITO)</b>
  - Testes "end to end" <b>(NÃO FEITO)</b>