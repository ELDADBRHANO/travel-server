const router = require('express').Router()
const {
  getCountries,
  getById,
  createCountry,
  deleteCountry,
  updateCountry
} = require('../controllers/trvael-ctrl');



router.get('/countries',getCountries);
router.get('/getById/:id',getById);
router.post('/createCountry',createCountry);
router.put('/updateCountry/:id',updateCountry);
router.delete('/deleteCountry/:id',deleteCountry);

module.exports = router