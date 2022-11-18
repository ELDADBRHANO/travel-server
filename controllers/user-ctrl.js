const users = require("../models/users-model");
const getAge = require("../validation/age-validation");
const emailValidation = require("../validation/email-validation");
const validatePass = require("../validation/password-validation");

const register = (req, res) => {
  const isEmailValid = emailValidation(req.body.email);
  const isPassword = validatePass(req.body.pass, req.body.verifyPass);
  const is18 = getAge(req.body.age);
  let counter = 0;
  if (isEmailValid && isPassword && is18 > 18) {
    users.push({
      id: Math.floor(Math.random()*1000000000),
      token: Math.floor(Math.random() * 10000),
      age: req.body.age,
      email: req.body.email,
      pass: req.body.pass,
    });
    res.send('all good')
  }
  res.send('error has been maid')
};

const getUsers = (req,res)=>{
  res.send(users)
}
module.exports ={register,getUsers} ;