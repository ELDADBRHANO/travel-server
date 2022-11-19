const countries = require('../models/countries-model');

function indexOfCountry(req) {
  const country = countries.find(country => country.id == req.params.id);
  const startIndex = countries.indexOf(country);
  return startIndex;
}

const getCountries=(req,res)=>{
  res.send(countries)
}

const getById = (req,res)=>{
  const countryId = countries.find(country => country.id == req.params.id)
  countryId ? res.send(countryId) : res.send("not found")
}

const createCountry = (req,res)=>{
  const data = req.body.data
  countries.push(data);
  data? res.send('success'): res.send('no success')
}

const deleteCountry = (req,res)=>{
  const countryTodelete = indexOfCountry(req);
  const deleteObj = countries.splice(countryTodelete,1);
  deleteObj?res.send('delete succesfully'):res.send('Error');
}


const updateCountry = (req,res)=>{
  const cityToUpdate = indexOfCountry(req);
  if(cityToUpdate>-1){
    countries[cityToUpdate] = req.body.data;
    return res.send('update succefully');
  }
  res.send('error have accuired');
}




module.exports = {
  getCountries,
  getById,
  createCountry,
  deleteCountry,
  updateCountry
}

