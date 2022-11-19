const router = require('express').Router();
const {
  getFlights,
  getFlightsById,
  updateFlight,
  createFlight,
  deleteFlight,
  findByFlightNUmber,
  findFlightsWithFirstClass,
  findFlightsByDept
} = require('../controllers/flight-ctrl');


router.get('/',getFlights);
router.get('/getFlightsById/:id',getFlightsById);
router.get('/byFlightNumber/:flightNum',findByFlightNUmber);
router.get('/firstClassFlights',findFlightsWithFirstClass);
router.get('/getByDept/:ETAtime',findFlightsByDept);
router.put('/updateFlight/:id',updateFlight);
router.post('/createFlight',createFlight);
router.delete('/deleteFlight/:id',deleteFlight);

module.exports = router;