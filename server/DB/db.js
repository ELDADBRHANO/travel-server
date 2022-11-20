const mongoose = require('mongoose');

const connectionToDb = process.env.CONNECTION_STRING;
mongoose.connect(connectionToDb,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{console.log('Connection to MongoDB success.')})
.catch((error)=>{console.error('connection failed', error.message)})

module.exports = mongoose.connection;








