const Sequelize = require('sequelize');
const database = require('../db');
const Pessoa = require('./pessoa');

const Usuario = database.define('Usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pessoaid: {
    type: Sequelize.INTEGER,
    allowNull: false, 
    references: {
      model: Pessoa, 
      key: 'id' 
    }
  }
})

Usuario.belongsTo(Pessoa, { foreignKey: 'pessoaid' }); // Estabelece a relação entre Usuario e Pessoa

module.exports = Usuario;
