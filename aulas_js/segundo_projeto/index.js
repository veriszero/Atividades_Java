/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e 
sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, 
por exemplo: um programa de calculadora.*/

function conta(){
    
}
function contaPoupanca(deposito,saque){
    let valorConta=0;
    let valorSaque=parseFloat(saque);
    let valorDeposito=parseFloat(deposito);

    if (valorDeposito >0) {
        valorConta += valorDeposito
        return console.log(valorConta);
    }else if(valorSaque >0){
        valorConta -= valorSaque
        return console.lor(valorConta);
    }
}
contaPoupanca(500,0)