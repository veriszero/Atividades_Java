//metodos http
//get busca - post cria - put atualizar - delete apagar
//biblioteca express routeamento
/*
import express from 'express';
import routes from './''routes';

const app = express();

metodos ex.:app.get app.put app.delete

Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá 
elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). Depois, 
faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar 
se o retorno está coerente com o que você programou.

Observação: os prints, ou o próprio código, devem ser divididos por arquivos. 
Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.


*/
const express = require ('express')
const server = express()

server.listen(3001,() =>{
    console.log('servidor de pe em http://localhost:3001')
    console.log('oara desligar o servidor :ctrl+c')
})
