const express = require('express')
const app = express()
const router = require('./router/router')
const port = 3000
require('./db/dbConnection')
app.use(express.json())
app.use('/veiculos', router)

app.listen(port , (err) => {
  if(err)
  console.log(err)
  else
  console.log(`run => ${port}`)
})
