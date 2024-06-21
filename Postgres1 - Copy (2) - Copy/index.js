const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./db/dbConnectionsModel'); // Corrected path for dbConnectionsModel.js

dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const verifyOtpRoute = require('./routes/otpVerificationRoute');
const busRoute = require('./routes/busRoute'); // Corrected path and case
const bookingRoute = require('./routes/bookingRoutes'); // Corrected path and case
const { seatRoute } = require('./db/seatModel'); // Corrected path and destructuring

// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/bus', busRoute);
app.use('/booking', bookingRoute);
app.use('/seat', seatRoute);  

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Bus Booking Application');
});

// Sync models and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error('Error syncing models with database:', error);
});
