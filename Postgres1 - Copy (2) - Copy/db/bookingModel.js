// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel');
// const { Register } = require('./registerModel'); // Import the Register model
// const { Bus } = require('./bus'); // Import the Bus model

// const Booking = sequelize.define('Booking', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   registerId: {
//     type: DataTypes.UUID,
//     references: {
//       model: Register,
//       key: 'registerId',
//     },
//     allowNull: false,
//   },
//   busId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Bus,
//       key: 'busId',
//     },
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   seatNumbers: {
//     type: DataTypes.ARRAY(DataTypes.INTEGER),
//     allowNull: false,
//   },
//   fare: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   cancelled: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// }, {
//   timestamps: true, // Enable Sequelize timestamps for createdAt and updatedAt
// });

// // Define relationships
// Booking.belongsTo(Register, { foreignKey: 'registerId', as: 'register' });
// Booking.belongsTo(Bus, { foreignKey: 'busId', as: 'bus' });

// module.exports = { Booking };


// const { DataTypes } = require('sequelize');
// const {sequelize} = require('./dbConnectionsModel'); // Import the shared Sequelize instance
// const Register = require('./registerModel'); // Import the Register model
// const Bus = require('./bus'); // Import the Bus model

// const Booking = sequelize.define('Booking', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   registerId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//   },
//   busId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   seatNumbers: {
//     type: DataTypes.ARRAY(DataTypes.INTEGER),
//     allowNull: false,
//   },
//   fare: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   cancelled: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// }, {
//   timestamps: true,
// });

// // Define associations
// Booking.belongsTo(Register, { foreignKey: 'registerId', as: 'register' });
// Booking.belongsTo(Bus, { foreignKey: 'busId', as: 'bus' });

// sequelize.sync()
//   .then(() => console.log('Bus table synced'))
//   .catch(err => console.error('Failed to sync Bus table:', err));

// module.exports = Booking;


// const { DataTypes, Model } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); // Adjust path as per your project structure
// const {Register} = require('./registerModel');
// const {Bus} = require('./bus');

// class Booking extends Model {}

// Booking.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   registerId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//   },
//   busId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   seatNumbers: {
//     type: DataTypes.ARRAY(DataTypes.INTEGER),
//     allowNull: false,
//   },
//   fare: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   cancelled: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// }, {
//   sequelize,
//   modelName: 'Booking',
//   timestamps: true,
// });

// // Define associations


// // Sync database and export the model
// sequelize.sync()
//   .then(() => console.log('Booking table synced'))
//   .catch(err => console.error('Failed to sync Booking table:', err));

// module.exports = {Booking};

// models/Booking.js

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel');

// const Booking = sequelize.define('Booking', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   customer_name: {
//     type: DataTypes.STRING(100),
//     allowNull: true,
//   },
//   phone_number: {
//     type: DataTypes.STRING(20),
//     allowNull: true,
//   },
//   email: {
//     type: DataTypes.STRING(100),
//     allowNull: true,
//   },
//   address: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   bus_id: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   selected_seats: {
//     type: DataTypes.ARRAY(DataTypes.TEXT),
//     allowNull: true,
//   },
//   passenger_details: {
//     type: DataTypes.ARRAY(DataTypes.JSONB),
//     allowNull: true,
//   },
//   discount_amount: {
//     type: DataTypes.NUMERIC(10, 2),
//   },
//   gst: {
//     type: DataTypes.NUMERIC(10, 2),
//   },
//   cart_total: {
//     type: DataTypes.NUMERIC(10, 2),
//   },
//   route: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   bus_type: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// }, {
//   timestamps: false, // Disable Sequelize automatic timestamps
// });

// module.exports = Booking;

const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  customer_name: {
    type: DataTypes.STRING(100),
    allowNull: true, // Can be null
  },
  phone_number: {
    type: DataTypes.STRING(20),
    allowNull: true, // Can be null
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true, // Can be null
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true, // Can be null
  },
  bus_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Can be null
  },
  selected_seats: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true, // Can be null
  },
  passenger_details: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true, // Can be null
  },
  discount_amount: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: true, // Can be null
  },
  gst: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: true, // Can be null
  },
  cart_total: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: true, // Can be null
  },
  route: {
    type: DataTypes.STRING,
    allowNull: true, // Can be null
  },
  bus_type: {
    type: DataTypes.STRING,
    allowNull: true, // Can be null
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Disable Sequelize automatic timestamps
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));

module.exports = {Booking};
