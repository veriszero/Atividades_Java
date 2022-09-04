const Sequelize = require('sequelize');
const database = require(' ./db');

const Produto = database.define('produto',{
    ide: {
        type: Sequelezi.INTEGER,
        autoIncrement:true,
        allowNull: false, 
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:Sequelize.DOUBLE,
    descricao:Sequelize.STRING
    
})

modulo.exports = Produto;
