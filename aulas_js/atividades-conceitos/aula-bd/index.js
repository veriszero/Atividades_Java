/*Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. 
Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. 
Se isso não ocorrer, retorne uma frase informando o erro.

* sequelize - orm
* mysql
 instalar sequeliza
 c:\user\Acer>npm sequelize mysql2
 CRUD - sequelize
*/

(async()=>{
    const database = require('./db');
    const produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log('conexao bem sucedida',resultado);
    } catch (error){
        console.log('conexao mal sucedida',error);
    }
})();
