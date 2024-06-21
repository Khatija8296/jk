const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const verifyOtpRoute = require('./routes/verifyOtp');
const busRoute = require('./routes/busRoute');
const bookingRoute = require('./routes/bookingRoutes');

// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/bus', busRoute);
app.use('/booking', bookingRoute);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Bus Booking Application');
});

// Seat selection data
let seats = {};

// WebSocket handling
io.on('connection', (socket) => {
  console.log('a user connected');

  // Send current seat status to new connection
  socket.emit('seatStatus', seats);

  // Handle seat selection
  socket.on('selectSeat', (data) => {
    const { seatId, userId } = data;
    if (!seats[seatId]) {
      seats[seatId] = userId;
      io.emit('seatStatus', seats); // Broadcast new seat status
    }
  });

  // Handle seat deselection
  socket.on('deselectSeat', (data) => {
    const { seatId, userId } = data;
    if (seats[seatId] === userId) {
      delete seats[seatId];
      io.emit('seatStatus', seats); // Broadcast new seat status
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
