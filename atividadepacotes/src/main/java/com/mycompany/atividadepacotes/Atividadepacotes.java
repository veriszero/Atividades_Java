/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.atividadepacotes;

import br.com.empresa.compras.SetorCompras;
import br.com.empresa.transporte.SetorTransporte;

/**
 *
 * @author super
 */
public class Atividadepacotes {

    public static void main(String[] args) {
        SetorCompras scomp;
        scomp = new SetorCompras();
        scomp.setProduto("Carro de controle");
        scomp.setvalorProduto(15f);
        scomp.setqtProduto(12);
        scomp.estoque();
        
        SetorTransporte stransp = new SetorTransporte();
        stransp.getNome("joaquin silva");
        stransp.getEnd("Rua da felicida, 10 Ed 12");
        stransp.dadosEntragar();
        
    }
}
