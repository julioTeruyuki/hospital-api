<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Teste Desenvolvedor Back-end Junior</p>

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


## Comandos Finalizar Instalação da API
- MySQL Command Line Client: 

  ```bash
  create database hospital;
  ```

- bash:

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

# POSTMAN

Acessar Requisições
<a href="https://documenter.getpostman.com/view/14617822/UVJYHxyv">https://documenter.getpostman.com/view/14617822/UVJYHxyv</a>