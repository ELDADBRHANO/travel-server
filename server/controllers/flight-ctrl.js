const flights = require("../models/flights-model");

const findIndexOfFlight = (req) => {
  const flight = flights.find((flight) => flight.id == req.params.id);
  const startIndex = flights.indexOf(flight);
  return startIndex;
};

const getFlights = async (req, res) => {
  await flights.find({})
    .then((data,err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "No Flights Available." });
    }
    res.status(200).json({ success: true, data: data });
  });
};


const getFlightsById = async (req, res) => {
  await flights.findById(req.params.id)
    .then((data)=>{
      if(!data){
        return res.json({success:false, message:"No data found!"})
      }
      return res.status(200).json({success:true, data:data})
    })
    .catch(err=>{
      if(err) res.status(400).json({success:false, error:err})
    })
};

const updateFlight = async (req, res) => {
 await flights.findByIdAndUpdate(req.params.id,req.body)
 .then(result=>res.status(200).json({success:true, result}))
 .catch(err=>res.status(400).json({success:false, error:err}))
}

const createFlight = async (req, res) => {
  await flights.insertMany(req.body.flight)
  .then((flight)=>{
    if(flight.length==0){
      return res.status(400).json({success:false, message:"Cant send empty fields!"})
    }
    return res.status(300).json({success:true, message:"flight added successfully."})
  })
  .catch(err=>{
    res.status(400).json({success:false, error:err})
  })

};

const deleteFlight = async (req, res) => {
  await flights.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true}))
  .catch(err=>res.status(401).json({success:false, error:err}))
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
