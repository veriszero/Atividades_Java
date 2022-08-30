
/*Crie um código com um objeto chamado “Banco”. Ele deverá ter 
propriedades que incluem conta, saldo, tipo de conta e agência e os 
seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo 
no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no 
saldo final do objeto;
- o número da conta deve retornar o número da conta.
 */

var Banco = {

    conta : 0,
    saldo : 0,
    numConta : '',
    agencia: '01',

    buscarSaldo(){
       return this.saldo;
    },
    depositar(valor){
        this.saldo +=valor
    },
    saque(valor){
        this.saldo -=valor
    },
    numeroConta(numConta){
        return this.numConta = numConta;
    }
}

var contaCliente1 = Banco;
console.log('Numero da conta: ',contaCliente1.numeroConta('01'));
contaCliente1.depositar(100);
console.log('Saldo da conta apos deposito: ',contaCliente1.buscarSaldo());
contaCliente1.saque(50)
console.log('Saldo da conta apos saque: ',contaCliente1.buscarSaldo());