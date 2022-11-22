
const mongoose = require('mongoose');
const Schema = mongoose.Schema;;
const flightsSchema = new Schema(
  {
    id:{type:Number,required:true},
    flightNum:{Number,},
    departFrom:{type:String,required:true},
    image:{type:String,required:true},
    landOn:{type:String,required:true},
    numOfSits:{type:Number,required:true},
    ETAtime:{type:String,required:true},
    arrivalTime:{type:String,required:true},
    isFirstClass:{type:Boolean,required:true},
    sitsAvailable:{type:Number,required:true}
  }
);


module.exports = mongoose.model('flights',flightsSchema);