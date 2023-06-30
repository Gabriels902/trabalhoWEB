const Sequelize = require('sequelize');
const database = require('../db');

const Movimento = database.define('Movimento', {
  conta_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  tipo: {
    type: Sequelize.CHAR,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  data_movimento: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  contacorrente_origem: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  contacorrente_destino: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  observacao: {
    type: Sequelize.CHAR,
  },
});

module.exports = movimento;
