const express = require("express")
let router = express.Router();
const request = require("../controller/veiculosController")

router
  .route("/")
  .post((req,res) => {
    request.createNewCar(req.body,(data) => {
      res.json(data)
    })
  })
  .get((req,res) => {
    res.json({ status: 200 })
  })
router
  .route("/:id")
  .get((req,res) => {
  res.send('adadawd')
  })
  .put((req,res) => {
  res.send('adadawd')
  })
  .patch((req,res) => {
  res.send('adadawd')
  })
  .delete((req,res) => {
  res.send('adadawd')
  })


module.exports= router 