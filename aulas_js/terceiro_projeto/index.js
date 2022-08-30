/*var count = 0;
var array=[]
//treinamento de lacos
while (count<5){
    console.log(count);
    ++count;
    array.push(count);
}
console.log(array);

/*var count2 = 0 ;
while (count2 <100){
    if(count2%3===0 && count2%5===0){
        console.log(count2,' :ping e pong')
    }else if(count2%3===0){
        console.log(count2,' :ping')
    }else if(count2%5===0){
        console.log(count2,' :pong')
    }
    count2++;
}
//laco for com array
//laco for sao mais usados em Array
var numArray = [4,5,6,7,4,7]
for (var count = 0; count<numArray.length;count++){
    console.log(count,'-',numArray[count])
}
console.log('--------')
for (var i = numArray.length-1;i>=0;i--){
    console.log(i,'-',numArray[i])
}
console.log('--------')
for(var num of numArray){
    console.log(num)
}
*/
//Functions- serve para reaproveitar o codigo
//Function e uma valor que pode ser usado por outra funcao 
//Quando usado o return o valor pode ser armazenado a uma variavel
function escreva(mensagem){
    console.log(mensagem)
}

escreva('hello world')

function soma(a,b){
    return(a+b)
}

let resultado = soma(4,5)
console.log(resultado)
//funcao passando a variavel dentro da funcao
function somaArray(){
    let conjunto =[1,2,3,4,5,6,7]
    let num =0
    for (var i =0;i<conjunto.length;i++){
         num += conjunto[i]
    }
    return (num)
}

let result = somaArray();
console.log('primeiro for ',result)


//funcao de soma array utilizando parametro e inserindo fora da funcao
function somaArray2(conjunto2){
    let num2=0;
    for(var i=0; i<conjunto2.length;i++){
        num2 +=conjunto2[i];
    }
    return(num2);
}

let res = somaArray2([1,2,3,4,5,6,7]);
console.log('segundo for ',res);

//utilizando For...of
function somaArray3(novoConjunto){
    let total=0;
    for(let num of novoConjunto){
        total +=num;
    }
    return (total);
}

let res2 = somaArray3([1,2,3,4,5,6,7]);
console.log('terceiro for ',res2);