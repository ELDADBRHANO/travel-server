const flightCompanys = require('../models/flight-companies-model');


function indexOfCompany(req) {
  const company =  flightCompanys.find(company => company.id == req.params.id);
  const startIndex = flightCompanys.indexOf(company);
  return startIndex
}

const getFlightsCompanys = (req,res)=>{
  res.send(flightCompanys)
}

const getFlightsCompanysById=(req,res)=>{
  const company = flightCompanys.find(company => company.id == req.params.id);
  company? res.send(company):res.send('no resulsts');
}

const updateCompanys =(req,res)=>{
  const companyToUpdate = indexOfCompany(req);
  if(companyToUpdate>-1){
    flightCompanys[companyToUpdate] = req.body.data;
    return res.send("success")
  }
  res.send('failed to update')
}

const deleteCompany =(req,res)=>{
  const companyToDelete = indexOfCompany(req);
  const objTodelete = flightCompanys.splice(companyToDelete,1);
  objTodelete? res.send('delete succefully'): res.send("Error")
}

const createCompany = (req,res)=>{
  const data = req.body.data;
  flightCompanys.push(data)
  data? res.send('added succefully'):res.send('error')
}


const getFlightByStateName = (req,res)=>{
  const stateName = flightCompanys.filter(company => company.name == req.params.name);
  stateName? res.send(stateName):res.send('error')
}


const getCompanyByName=(req,res)=>{
  const company = flightCompanys.find(company => company.name == req.params.name);
  company? res.send(company):res.send("no company");
}

module.exports = {
  getFlightsCompanys,
  getFlightsCompanysById,
  updateCompanys,
  deleteCompany,
  createCompany,
  getFlightByStateName,
  getCompanyByName
}

