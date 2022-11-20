const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightCompanySchema = new Schema({
  id:Number,
  name:String,
  state:String,
  numOfairPlanes:Number,
  availableFlightsNum:Number
})

module.exports = mongoose.model('CompanysFlights',flightCompanySchema);