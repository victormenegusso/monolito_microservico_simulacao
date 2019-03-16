const mongoose = require('mongoose')
const axios = require('axios')

// Database
mongoose.connect('mongodb://db/mydb')

// ODM
const LancamentoContabil = mongoose.model('LancamentoContabil', {
  cnpj: { type: String, required: true },
  contaDebito: { type: String, required: true },
  contaCredito: { type: String, required: true },
  valor: { type: Number, required: true },
})

const escriturar = async (cnpj) => {

  // remove os lançamentos antigos
  const lancamentos = await listByCnpj(cnpj)
  lancamentos.map(lc => lc.remove())

  // escritura as notas
  return await axios.get(`http://notas-backend:7171/api/notas/${cnpj}`)
    .then(response => {
      const notas = response.data

      notas.map(nota => {
        const LancamentoContabilModel = new LancamentoContabil({
          cnpj,
          contaDebito: '1.01.01.01',
          contaCredito: '3.01.01.01',
          valor: nota.valor,
        })
        return LancamentoContabilModel.save()
      })

      return 'OK'
    })
    .catch(error => {
      return error.response
    })
}

const list = () => {
  const LancamentoContabilModel = mongoose.model('LancamentoContabil')
  return LancamentoContabilModel.find().then((lancamentoContabil) => lancamentoContabil)
}

const listByCnpj = cnpj => {
  const LancamentoContabilModel = mongoose.model('LancamentoContabil')
  return LancamentoContabilModel.find({ cnpj }).then((lancamentoContabil) => lancamentoContabil)
}

module.exports = {
  escriturar,
  list,
  listByCnpj,
}