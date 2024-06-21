const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel'); // Ensure correct relative path

// Define the Bus model for the "Buses" table
const Buses = sequelize.define('Buses', {
  busId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  busName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  busNo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  busType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  busRoute: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  busRouteTimes: {
    type: DataTypes.ARRAY(DataTypes.DATE),
    allowNull: false,
  },
  departure: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  arrival: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  facilities: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  datesAvailable: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  timestamps: true, // Enable Sequelize timestamps for createdAt and updatedAt
});

module.exports = Buses;
