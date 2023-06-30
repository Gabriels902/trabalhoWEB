const Sequelize = require('sequelize');
const database = require('../db');
const Pessoa = require('./pessoa');

const Usuario = database.define('Usuario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: Sequelize.CHAR(32),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.CHAR(32),
    allowNull: false
  }
});

Usuario.belongsTo(Pessoa, { foreignKey: 'pessoa_id' });

module.exports = Usuario;
