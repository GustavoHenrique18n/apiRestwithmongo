const Veiculos = require("../model/veiculos")
const Marca = require("../model/marca")
const marca = new Marca()
const veiculo = new Veiculos()

module.exports={
  async createNewCar (req,callback) {
    veiculo.veiculo = req.veiculo
    veiculo.ano = req.ano
    veiculo.descricao = req.descricao
    veiculo.vendido = req.vendido
    marca.nome = req.nome
    try {
      await marca.save()
      veiculo.marca_id.push(marca) 
      await veiculo.save()
      callback({message:'anuncio cadastrado com successo :)'})
    } catch (err) {
      callback({message:`erro ao criar um novo anuncio :( ${err}`})
    }
  },
  async GetAll (callback) {
      const response = await Veiculos.find()
      callback(response)
  }
}