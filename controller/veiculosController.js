const Veiculos = require("../model/veiculos")
const Marca = require("../model/marca")

module.exports={
  async createNewCar(req,callback){
    const marca = new Marca()
    marca.nome = req.nome
    try {
      await marca.save()
      callback({message:'marca cadastrada com successo :)'})
    } catch (err) {
      callback({message:`erro ao criar um novo anuncio :( ${err}`})
    }
  }
}