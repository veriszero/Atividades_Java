/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e 
sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, 
por exemplo: um programa de calculadora.*/

function conta(){
    
}
function contaPoupanca(deposito){
    let valorConta=0;
    let valorDeposito=parseFloat(deposito);
    valorConta += valorDeposito
    return console.log(valorConta);

}
contaPoupanca(500);

valorNovaConta=500;
let contaCorrente = (saque) =>valorNovaConta-=saque;

console.log(contaCorrente(200));
