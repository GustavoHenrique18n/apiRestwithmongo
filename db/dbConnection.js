const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:8089/teste_fullstack', {useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection
  .once('open' , () => console.log('mongo connected'))
  .on('error' , err => console.log(err))