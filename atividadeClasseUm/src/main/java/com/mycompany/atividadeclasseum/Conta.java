package com.mycompany.atividadeclasseum;
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *Crie uma classe de sua preferência com, no mínimo, uma variável, um método e um incremento. 
 *Depois, desenvolva três ou mais objetos para testar o código. 
 */
public class Conta {
    String cliente;
    float saldo,saque;
    boolean ativo = false;
    
    Scanner sc = new Scanner(System.in);
    
    void informacao(){
        System.out.println("O nome do cliente:" + cliente);
    }
    
    void ativarconta(){
        ativo = true;        
    }
    void depositar(){
        if (ativo == true) {
            saldo = sc.nextFloat();
        }else {
            System.out.println("Conta inativa");
        }
    }
    void saldoconta(){
        System.out.println("Seu saldo e: " + saldo);
    }
    void sacar(){
        saque = sc.nextFloat();
        saldo -= saque;
    }
    
}
