const mongoose = require("mongoose")
const Schema =  mongoose.Schema;

const VeiculoSchema = new Schema({
  veiculo:String,
  marca_id:{ type: Schema.Types.ObjectId , ref:'marcaVeiculo' },
  ano: Number,
  descricao: String,
  vendido: Boolean,
  created_at:{ type: Date, default: Date.now },
  updated_at:{ type: Date, default: Date.now },
})

module.exports = mongoose.model('Veiculos', VeiculoSchema)