const Sequelize = require('sequelize');
const database = require('../db');
const ContaCorrente = require('../models/ContaCorrente');

const Movimento = database.define('Movimento', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  contacorrente_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tipo: {
    type: Sequelize.CHAR(1),
    allowNull: false
  },
  data_movimento: {
    type: Sequelize.DATE,
    allowNull: false
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  contacorrente_origem: {
    type: Sequelize.BIGINT
  },
  contacorrente_destino: {
    type: Sequelize.BIGINT
  },
  observacao: {
    type: Sequelize.CHAR(255)
  }
});

Movimento.belongsTo(ContaCorrente, { foreignKey: 'conta_id' });

module.exports = Movimento;
