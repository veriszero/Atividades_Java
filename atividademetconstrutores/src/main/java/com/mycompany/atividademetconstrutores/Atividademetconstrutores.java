/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.atividademetconstrutores;

/**
 *Crie uma classe e insira nela, no mínimo, dois atributos, 
 *os quais devem ter um método acessor (get) e um método modificador (set) para cada. 
 *Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.
 *A atividade pode ser realizada em qualquer linguagem de programação ou apenas utilizando algoritmos.
 */
public class Atividademetconstrutores {

    public static void main(String[] args) {
        
        Aluno novoAluno = new Aluno();
         novoAluno.setNome("Jose");
         novoAluno.serNota(7f);
         novoAluno.info();
    }
}
