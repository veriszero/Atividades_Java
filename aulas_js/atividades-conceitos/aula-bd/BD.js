const Sequelize = require ('sequelize');
const { isModuleNamespaceObject } = require('util/types');
const sequelize = new Sequelize ('teste','root', '12345'), {dialect:'mysql', host:'localhost'};

module.exports = sequelize;
