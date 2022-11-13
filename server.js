const express = require('express');
const cors = require('cors');
const travelRouter = require('./routes/travel-router');
const flightsRouter = require('./routes/flightCaompanys-router');
const flights = require('./routes/flight-router')
const app = express();
const port = 5000
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/countries' ,travelRouter);
app.use('/companyFlights',flightsRouter);
app.use('/flights',flights);


app.get('/',(req,res)=>{
  res.send({message:"success"});
})

app.listen(port,()=>{
  console.log(`app is up on port:${port}`);
})