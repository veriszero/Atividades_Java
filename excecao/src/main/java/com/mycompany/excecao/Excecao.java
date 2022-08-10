/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.excecao;

/**
 *
 * @author super
 */
public class Excecao {

    public static void main(String[] args) {
        int x = 2;
        int y = 0;
        int z;
        try{
            z = x/y;
            System.out.println(z);
        }catch(ArithmeticException exception){
            
            System.out.println("erro ao dividir por zero");
        }
            
    }
}
