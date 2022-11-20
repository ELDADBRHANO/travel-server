const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countriesSchema = new Schema({
  id: Number,
  name: String,
  cities: Array,
  more: {
    captialCity:String,
    airPort: String,
}})

module.exports = mongoose.model('Countries',countriesSchema);