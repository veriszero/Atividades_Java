const Sequelize = require ('sequelize');
const { isModuleNamespaceObject } = require('util/types');
const sequelize = new Sequelize ('teste','root', '12345'), {dialect:'mysql', host:'localhost'};

module.exports = sequelize;
/*
exemplo softex
const Sequelize = require('sequelize');
const database = require(' ./db');

const Produto = database.define('produto',{
    ide: {
        type: Sequelezi.INTEGER,
        autoIncrement:true,
        allowNull: false'
        primaryKey: true
    }
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
    preco: {
        type:Sequelize.DOUBLE
    }
    descricao:Sequelize.STRING
    }
})
modulo.exports = Produto;

*/