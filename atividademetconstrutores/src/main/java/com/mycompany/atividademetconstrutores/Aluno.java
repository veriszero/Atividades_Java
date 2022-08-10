/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.atividademetconstrutores;

/**
 *Metodos acessores 
 *getters
 *metodos modificadores
 *setter
 */
public class Aluno {
    private String nome;
    private float nota;
    //
    // getter = pegar ...
    public String getNome(){
        
        return this.nome;
        
    }
    public void setNome(String novoNome){
        
        this.nome = novoNome;
    
    }
    public float getNota(){
        
        return this.nota;
        
    }
    public void serNota(float novaNota){
        
        this.nota = novaNota;
        
    }
    public void info (){
        System.out.println("Nome do aluno: " +this.nome + "e a nota aluno: "+ this.nota);
        if (this.nota >=7){
            System.out.println("Aprovato");
        }else{
            System.out.println("Reprovado");
        }
    }
    
    
}
