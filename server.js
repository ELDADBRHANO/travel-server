const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const travelRouter = require('./routes/travel-router');
const flightsRouter = require('./routes/flightCaompanys-router');
const flights = require('./routes/flight-router')
const users = require('./models/users-model');
const userRouter = require('./routes/user-router');

const app = express();


const middleWare=(req,res,next)=>{
  if(req.key)console.log('there is data');
   console.log('there is no data ');
   next()
  }

  const mid = (req,res,next)=>{
    req.method == 'POST'?console.log('Flights on Discount!'):console.log('no post');
    next();
  }

  const middleWareForUsers =(req,res,next)=>{
    const user = users.find(user => user.email == req.body.email);
    if(!user) return res.send("no such email") ;
    user.pass == req.body.pass?  next(): res.send("no access!")
}
const port = 5000
// app.use(middleWare)
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/user',middleWareForUsers,userRouter);
app.use('/countries' ,travelRouter);
app.use('/companyFlights',flightsRouter);
app.use('/flights',middleWareForUsers,flights);

app.get('/',(req,res)=>{
  res.send({message:"success"});
})

app.listen(port,()=>{
  console.log(`app is up on port:${port}`);
})