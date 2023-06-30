const Sequelize = require('sequelize');
const database = require('../db');
const Usuario = require('./usuario');

const ContaCorrente = database.define('ContaCorrente', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  numero: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true
  },
  nome: {
    type: Sequelize.CHAR(255),
    allowNull: false
  },
  data_abertura: {
    type: Sequelize.DATE,
    allowNull: false
  },
  saldo: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

ContaCorrente.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = ContaCorrente;
