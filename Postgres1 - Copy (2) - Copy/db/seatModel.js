// db/seatModel.js

const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const Seat = sequelize.define('Seat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Bus', // Adjust if your bus model is named differently
      key: 'id',
    },
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Seat;
