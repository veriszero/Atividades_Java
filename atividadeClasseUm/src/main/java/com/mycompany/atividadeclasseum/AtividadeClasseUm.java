/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.atividadeclasseum;

public class AtividadeClasseUm {

    public static void main(String[] args) {
        Conta novaConta = new Conta();
        
        novaConta.cliente = "Jose";
        novaConta.informacao();
        novaConta.ativarconta();
        novaConta.depositar();
        novaConta.saldoconta();
        novaConta.sacar();
        novaConta.saldoconta();
        
        Conta novaConta2 = new Conta();
        
        novaConta2.cliente = "Joao";
        novaConta2.informacao();
        novaConta2.ativarconta();
        novaConta2.depositar();
        novaConta2.saldoconta();
        novaConta2.sacar();
        novaConta2.saldoconta();
        
        Conta novaConta3 = new Conta();
        
        novaConta3.cliente = "Rita";
        novaConta3.informacao();
        novaConta3.ativarconta();
        novaConta3.depositar();
        novaConta3.saldoconta();
        novaConta3.sacar();
        novaConta3.saldoconta();
    }
}
