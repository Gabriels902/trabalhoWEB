const Sequelize = require('sequelize');
const database = require('../db');

const Pessoa = database.define('Pessoa', {
  id: {
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
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  telefone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cep: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  data_nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  }
});

module.exports = Pessoa;
