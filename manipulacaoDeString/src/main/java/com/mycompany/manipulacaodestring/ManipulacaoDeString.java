/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.manipulacaodestring;

import java.util.Scanner;

/**
 *
 * @author super
 */
public class ManipulacaoDeString {

    public static void main(String[] args) {
      
        String nome = "Manipulacao de String" ;
        System.out.println(nome.length());
        System.out.println(nome + " teste de concatenacao");
        System.out.println(nome.contains("de"));
        System.out.println(nome.toUpperCase());
        System.out.println(nome.toLowerCase());
        System.out.println(nome.substring(5));
    }
}
