
const mongoose = require('mongoose');
const Schema = mongoose.Schema;;
const flightsSchema = new Schema(
  {
    id:Number,
    flightNum:Number,
    departFrom:String,
    image:String,
    landOn:String,
    numOfSits:Number,
    ETAtime:String,
    arrivalTime:String,
    isFirstClass:Boolean,
    sitsAvailable:Number
  }
);


module.exports = mongoose.model('flights',flightsSchema);