# Store Manager

Projeto desenvolvido no módulo de Back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). 

## Sobre o projeto

<div align="justify">
O Store Manager é um sistema de gerenciamento de vendas no formato dropshipping, onde é possível criar visualizar, deletar e atualizar produtos e vendas.
</div>

## Desenvolvimento 

<div align="justify">
Para isso foi desenvolvido uma aplicação em Express, middlewares para realizar as validações das requisições e uma API Restful, utilizando a arquitetura MSC (model-service-controller), que consome um banco SQL para a gestão dos dados. Também foram implementados testes unitários para garantir o bom funcionamento da aplicação. 
</div>

## Tecnologias

* Javascript
* Node.js
* Express
* MySQL
* Mocha
* Chai
* Sinon
* DotEnv
* Docker

## Como rodar o projeto com Docker

1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Fernanda-Vidal/store-manager.git`

2 - Entre na pasta desejada:

`cd store-manager`

3 - Rode o serviço node com o seguinte comando:

`docker-compose up -d --build`

4 - Acesse o bash do container:

`docker exec -it store_manager bash`

5 - Instale as dependências do projeto e rode a aplicação:

`npm install && npm run debug`
