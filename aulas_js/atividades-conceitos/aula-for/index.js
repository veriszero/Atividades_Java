var dados = {
    nome : "Maria jose",
    idade : 70,
    sexo : "f"
}

var novoArray = [1,2,3,4,5]

function percorrerArray() {
    for (const nArray of novoArray){
        console.log(nArray)
    }
    
}
function percorrerObjetos(){
    for (const nDados in dados){
        console.log(dados[nDados])
    }
}
percorrerArray();
percorrerObjetos();