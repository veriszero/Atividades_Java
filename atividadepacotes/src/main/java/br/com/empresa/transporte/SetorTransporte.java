/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.empresa.transporte;

/**
 *
 * @author super
 */
public class SetorTransporte {
    private String nomeCliente;
    private String endCliente;
    
    public String setNome(){
        return this.nomeCliente;
    }
    public void getNome(String nome){
        this.nomeCliente = nome;
    }
    public String setEnd(){
        return this.endCliente;
    }
    public void getEnd(String end){
        this.endCliente = end;
    }
    public void dadosEntragar(){
        System.out.println("Nome: "+this.nomeCliente+ " endereco: "+this.endCliente);
    }
}
