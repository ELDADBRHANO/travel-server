const router = require('express').Router()
const { application } = require('express');
const {register,getUsers} = require('../controllers/user-ctrl');


router.post('/user',register);
router.get('/',getUsers)

module.exports = router;