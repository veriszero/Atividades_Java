/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.atividadeserializacao;

import java.io.Serializable;

/**
 *
 * @author super
 */
public class EscreverSeria implements Serializable {
    private String nome;
    
    public String setNome(){
        
        return this.nome;
        
    }
    public void getNome(String novoNome){
        this.nome = novoNome;
    }
    
}
