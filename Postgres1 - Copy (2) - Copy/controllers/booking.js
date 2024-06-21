
const { Booking } = require('../db/bookingModel');
const { Op } = require('sequelize');

// Create a new booking
const createBooking = async (req, res) => {
  const {
    customer_name,
    phone_number,
    email,
    address,
    bus_id,
    selected_seats,
    passenger_details,
    discount_amount,
    gst,
    cart_total,
    route,
    bus_type
  } = req.body;

  try {
    // Create the booking record
    const newBooking = await Booking.create({
      customer_name,
      phone_number,
      email,
      address,
      bus_id,
      selected_seats,
      passenger_details,
      discount_amount,
      gst,
      cart_total,
      route,
      bus_type
    });

    // Send success response with the created booking
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Get all bookings or search by query parameters
const getAllBookings = async (req, res) => {
  try {
    let bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById
};
