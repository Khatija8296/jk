// const { Bus } = require('../db/bus');
// const { Op } = require('sequelize');

// // Create a new bus record
// const createBus = async (req, res) => {
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     numOfSeats,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     fare,
 
//     datesAvailable
//   } = req.body;

//   try {
//     // Check if required fields are present in the request body
//     if (!busName || !busNumber || !capacity || !busType || !numberOfSeats) {
//       return res.status(400).json({ error: 'busName, busNumber, capacity, busType, and numberOfSeats are required fields' });
//     }

//     // Proceed with creating the new bus record
//     const newBus = await Bus.create({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       numOfSeats,
//       runsOnDays,
//       departure,
//       arrival,
//       facilities,
//       fare,
//       reviews,
//       datesAvailable
//     });

//     res.status(201).json(newBus);
//   } catch (error) {
//     console.error('Error creating bus record:', error);
//     res.status(500).json({ error: 'Error creating bus record' });
//   }
// };

// // Get all bus records or search buses by query parameters
// // const getAllBuses = async (req, res) => {
// //   const { from, to, datesAvailable } = req.query;
// //   try {
// //     let buses;
// //     if (from && to && datesAvailable) {
// //       buses = await Bus.findAll({
// //         where: {
// //           from,
// //           to,
// //           datesAvailable: { [Op.contains]: [datesAvailable] },
// //           runsOnDays: { [Op.contains]: [new Date(datesAvailable).getDay().toString()] }
// //         }
// //       });
// //     } else {
// //       buses = await Bus.findAll();
// //     }
// //     res.status(200).json(buses);
// //   } catch (error) {
// //     console.error('Error fetching buses:', error);
// //     res.status(500).json({ error: 'Error fetching bus records' });
// //   }
// // };



// // Get all bus records or search buses by query parameters
// const getAllBuses = async (req, res) => {
//   const { from, to, datesAvailable } = req.query;
//   try {
//     let buses;
//     if (from && to && datesAvailable) {
//       buses = await Bus.findAll({
//         where: {
//           from,
//           to,
//           datesAvailable: { [Op.contains]: [datesAvailable] }
//         }
//       });
//     } else {
//       buses = await Bus.findAll();
//     }
//     res.status(200).json(buses);
//   } catch (error) {
//     console.error('Error fetching buses:', error);
//     res.status(500).json({ error: 'Error fetching bus records' });
//   }
// };


// // Get a single bus record by ID
// const getBusById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const bus = await Bus.findByPk(id);
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }
//     res.status(200).json(bus);
//   } catch (error) {
//     console.error('Error fetching bus by ID:', error);
//     res.status(500).json({ error: 'Error fetching bus record' });
//   }
// };

// // Update a bus record by ID
// const updateBusById = async (req, res) => {
//   const { id } = req.params;
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     numOfSeats,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     fare,
//     reviews,
//     datesAvailable
//   } = req.body;

//   try {
//     const bus = await Bus.findByPk(id);
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }

//     await bus.update({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       numOfSeats,
//       runsOnDays,
//       departure,
//       arrival,
//       facilities,
//       fare,
//       reviews,
//       datesAvailable
//     });

//     res.status(200).json({ message: 'Bus updated successfully', bus });
//   } catch (error) {
//     console.error('Error updating bus by ID:', error);
//     res.status(500).json({ error: 'Error updating bus record' });
//   }
// };

// // Delete a bus record by ID
// const deleteBusById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const bus = await Bus.findByPk(id);
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }
//     await bus.destroy();
//     res.status(200).json({ message: 'Bus deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting bus by ID:', error);
//     res.status(500).json({ error: 'Error deleting bus record' });
//   }
// };

// module.exports = {
//   createBus,
//   getAllBuses,
//   getBusById,
//   updateBusById,
//   deleteBusById
// };

const { Bus } = require('../db/bus');
const { Op } = require('sequelize');

// Create a new bus record
const createBus = async (req, res) => {
  const {
    busName,
    busNo,
    capacity,
    busType,
    numberOfSeats,
    from,
    to,
    busRoute,
    busRouteTimes,
    departure,
    arrival,
    facilities,
    price,
    reviews,
    datesAvailable
  } = req.body;

  try {
    // Check if required fields are present in the request body
    if (!busName || !busNo || !capacity || !busType || !numberOfSeats) {
      return res.status(400).json({ error: 'busName, busNo, capacity, busType, and numberOfSeats are required fields' });
    }

    // Proceed with creating the new bus record
    const newBus = await Bus.create({
      busName,
      busNo,
      capacity,
      busType,
      numberOfSeats,
      from,
      to,
      busRoute,
      busRouteTimes,
      departure,
      arrival,
      facilities,
      price,
      reviews,
      datesAvailable
    });

    res.status(201).json(newBus);
  } catch (error) {
    console.error('Error creating bus record:', error);
    res.status(500).json({ error: 'Error creating bus record' });
  }
};

// Get all bus records or search buses by query parameters
const getAllBuses = async (req, res) => {
  const { from, to, datesAvailable } = req.query;
  try {
    let buses;
    if (from && to && datesAvailable) {
      buses = await Bus.findAll({
        where: {
          from,
          to,
          datesAvailable: { [Op.contains]: [datesAvailable] }
        }
      });
    } else {
      buses = await Bus.findAll();
    }
    res.status(200).json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ error: 'Error fetching bus records' });
  }
};

// Get a single bus record by ID
const getBusById = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findByPk(id);
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }
    res.status(200).json(bus);
  } catch (error) {
    console.error('Error fetching bus by ID:', error);
    res.status(500).json({ error: 'Error fetching bus record' });
  }
};

// Update a bus record by ID
const updateBusById = async (req, res) => {
  const { id } = req.params;
  const {
    busName,
    busNo,
    capacity,
    busType,
    numberOfSeats,
    from,
    to,
    busRoute,
    busRouteTimes,
    departure,
    arrival,
    facilities,
    price,
    reviews,
    datesAvailable
  } = req.body;

  try {
    const bus = await Bus.findByPk(id);
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    await bus.update({
      busName,
      busNo,
      capacity,
      busType,
      numberOfSeats,
      from,
      to,
      busRoute,
      busRouteTimes,
      departure,
      arrival,
      facilities,
      price,
      reviews,
      datesAvailable
    });

    res.status(200).json({ message: 'Bus updated successfully', bus });
  } catch (error) {
    console.error('Error updating bus by ID:', error);
    res.status(500).json({ error: 'Error updating bus record' });
  }
};

// Delete a bus record by ID
const deleteBusById = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findByPk(id);
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }
    await bus.destroy();
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error('Error deleting bus by ID:', error);
    res.status(500).json({ error: 'Error deleting bus record' });
  }
};

module.exports = {
  createBus,
  getAllBuses,
  getBusById,
  updateBusById,
  deleteBusById
};
