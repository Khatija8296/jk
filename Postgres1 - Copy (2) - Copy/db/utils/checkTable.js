const sequelize = require('../dbConnectionsModel'); // Ensure correct relative path
const Buses = require('../models/bus');

// Check if the "Buses" table exists and describe its structure
async function checkBusesTable() {
  try {
    // Synchronize the model with the database
    await Buses.sync();

    // Describe the "Buses" table to verify its structure
    const tableDescription = await sequelize.getQueryInterface().describeTable('Buses');
    console.log('Buses Table Structure:', tableDescription);
  } catch (error) {
    console.error('Error checking Buses table:', error.message);
  }
}

module.exports = checkBusesTable;
