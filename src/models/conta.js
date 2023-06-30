const Sequelize = require('sequelize');
const database = require('../db');

const Conta = database.define('Conta', {
  usuario_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  numero: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true 
    }
  },
  data_abertura: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  saldo: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
});

module.exports = Conta;
