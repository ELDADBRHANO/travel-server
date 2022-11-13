const router = require("express").Router();
const {
  getFlightsCompanys,
  getFlightsCompanysById,
  updateCompanys,
  deleteCompany,
  createCompany,
  getFlightByStateName,
  getCompanyByName
} = require("../controllers/flight-company-ctrl");

router.get("/", getFlightsCompanys);
router.get("/getById/:id", getFlightsCompanysById);
router.get('/getByName/:name',getFlightByStateName);
router.get('/getByNameOfCompany/:name',getCompanyByName);
router.put("/updataCompany/:id", updateCompanys);
router.delete("/deleteCompany/:id", deleteCompany);
router.post("/createCompany", createCompany);

module.exports = router;
