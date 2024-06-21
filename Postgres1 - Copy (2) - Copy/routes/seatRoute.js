// routes/seatRoute.js
const express = require('express');
const { Seat } = require('../db/dbConnectionsModel');
const router = express.Router();

router.get('/seats/:busId', async (req, res) => {
  const busId = req.params.busId;
  try {
    const seats = await Seat.findAll({ where: { busId } });
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch seats' });
  }
});

router.post('/seats/:busId', async (req, res) => {
  const busId = req.params.busId;
  const { seatNumber } = req.body;
  try {
    const newSeat = await Seat.create({ busId, seatNumber });
    res.json(newSeat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create seat' });
  }
});

router.put('/seats/:seatId/select', async (req, res) => {
  const seatId = req.params.seatId;
  try {
    const seat = await Seat.findByPk(seatId);
    seat.isSelected = true;
    await seat.save();
    res.json(seat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to select seat' });
  }
});

router.put('/seats/:seatId/deselect', async (req, res) => {
  const seatId = req.params.seatId;
  try {
    const seat = await Seat.findByPk(seatId);
    seat.isSelected = false;
    await seat.save();
    res.json(seat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to deselect seat' });
  }
});

module.exports = router;
