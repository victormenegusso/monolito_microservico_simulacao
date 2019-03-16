const mongoose = require('mongoose');

// Database
mongoose.connect('mongodb://db/mydb')

// ODM
const Nota = mongoose.model('Nota', {
  numero: { type: Number, required: true },
  cnpj: { type: String, required: true },
  valor: { type: Number, required: true },
})

const registrar = (numero, cnpj, valor) => {
  const notaModel = new Nota({numero, cnpj, valor})
  return notaModel.save().then((nota) => nota)
}

const list = () => {
  const notaModel = mongoose.model('Nota')
  return notaModel.find().then((nota) => nota)
}

const listByCnpj = cnpj => {
  const notaModel = mongoose.model('Nota')
  return notaModel.find({cnpj}).then((nota) => nota)
}

const remove = id => {
  const notaModel = mongoose.model('Nota')
  notaModel.remove({ _id: id }).then((nota) => nota)
}

module.exports = {
  registrar,
  list,
  listByCnpj,
  remove,
}