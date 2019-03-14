const Router = require('express-promise-router')
const service = require('../services/escrituracaoService')
const router = new Router()

router.get('/', async (req, res) => {
  const lancamentos = await service.list()
  res.send(lancamentos)
})

router.get('/:cnpj', async (req, res) => {
  const { cnpj } = req.params
  const lancamentos = await service.listByCnpj(cnpj)
  res.send(lancamentos)
})

router.post('/', async (req, res) => {
  const cnpj = req.body.cnpj
  service.escriturar(cnpj)
  res.send('ok')
})

module.exports = router