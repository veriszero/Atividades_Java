/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.empresa.compras;

/**
 *
 * @author super
 */
public class SetorCompras {
    private String nomeProduto;
    private float valorProduto;
    private int quantProduto;
    
    public String getProduto(){
        
        return this.nomeProduto;
        
    }
    public void setProduto(String prod){
        this.nomeProduto = prod;
    }
    public float getvalorProduto(){
        
        return this.valorProduto;
        
    }
    public void setvalorProduto(float valor){
        this.valorProduto = valor;
    }
     public float getqtProduto(){
        
        return this.quantProduto;
        
    }
    public void setqtProduto(int quant){
        this.quantProduto = quant;
    }
    public void estoque(){
        System.out.println("Nome produto: " +this.nomeProduto+" valor: " +this.valorProduto+" Quant.: " + this.quantProduto);
    }
}
