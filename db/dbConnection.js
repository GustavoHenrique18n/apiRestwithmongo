const mongoose = require("mongoose")

const dbConnection = (() =>{
  mongoose.connect('mongodb://localhost:8089/teste_fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connection
  .once('open' , () => console.log('mongo connected'))
  .on('error' , err => console.log(err))
})() 

module.exports = dbConnection