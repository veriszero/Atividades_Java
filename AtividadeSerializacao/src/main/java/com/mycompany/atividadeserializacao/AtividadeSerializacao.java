/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.atividadeserializacao;
import java.io.*;
/**
 *
 * @author super
 */
public class AtividadeSerializacao {

    public static void main(String[] args) {
        EscreverSeria es = new EscreverSeria();
        es.getNome("Empresa ltd.");
        
        ObjectOutputStream objectOut = new ObjectOutputStream(new FileOutputStream(name:"teste"));
        objectOut.writeObject(es);
        objectOut.close();
        
        
        ObjectInputStream objectIn = new ObjectInputStream(new FileInputStream(name:"teste"));
        objectIn.readObject();
        objectIn.close();
    }
}
