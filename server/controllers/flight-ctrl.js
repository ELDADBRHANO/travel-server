const { off } = require("../models/countries-model");
const flights = require("../models/flights-model");

const findIndexOfFlight = (req) => {
  const flight = flights.find((flight) => flight.id == req.params.id);
  const startIndex = flights.indexOf(flight);
  return startIndex;
};

const getFlights = async (req, res) => {
  await flights.find((err, data) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "No Flights Available." });
    }
    res.status(200).json({success:true, data:data});
  });
};

const getFlightsById = (req, res) => {
  const flight = flights.find((flight) => flight.id == req.params.id);
  flight ? res.send(flight) : res.send("error");
};

const updateFlight = (req, res) => {
  const flightToUpdate = findIndexOfFlight(req);
  if (flightToUpdate > -1) {
    flights[flightToUpdate] = req.body.data;
    return res.send("update successfully");
  }
  res.send("error");
};

const createFlight = (req, res) => {
  const data = req.body;
  if (data) {
    flights.push(data);
    return res.send("success");
  }
  res.send("error");
};

const deleteFlight = (req, res) => {
  const flightToDelete = findIndexOfFlight(req);
  const objToDelete = flights.splice(flightToDelete, 1);
  objToDelete ? res.send("successfully deleted") : res.send("error");
};

const findByFlightNUmber = (req, res) => {
  const flightNumber = flights.find(
    (flight) => flight.flightNum == req.params.flightNum
  );
  flightNumber ? res.send(flightNumber) : res.send("error");
};

const findFlightsWithFirstClass = (req, res) => {
  const flightWithFirstClass = flights.filter(
    (flight) => flight.isFirstClass == true
  );
  flightWithFirstClass ? res.send(flightWithFirstClass) : res.send("error");
};

const findFlightsByDept = (req, res) => {
  const flightByDept = flights.filter(
    (flight) => flight.ETAtime == req.params.ETAtime
  );
  flightByDept ? res.send(flightByDept) : res.send("error");
};

module.exports = {
  getFlights,
  getFlightsById,
  updateFlight,
  createFlight,
  deleteFlight,
  findByFlightNUmber,
  findFlightsWithFirstClass,
  findFlightsByDept,
};
