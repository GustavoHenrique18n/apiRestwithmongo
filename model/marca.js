const mongoose= require('mongoose')
const Schema =  mongoose.Schema;

const MarcaSchema = new Schema({
  nome:String
})

module.exports = mongoose.model('marca' , MarcaSchema)