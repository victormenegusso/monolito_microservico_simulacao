const Router = require('express-promise-router')
const service = require('../services/notasService')

const router = new Router()

router.get('/', async (req, res) => {
  const notas = await service.list()
  res.send(notas)
})

router.get('/:cnpj', async (req, res) => {
  const { cnpj } = req.params
  const notas = await service.listByCnpj(cnpj)
  res.send(notas)
})

router.post('/', async (req, res) => {
  const { numero, cnpj, valor } = req.body
  service.registrar(numero, cnpj, valor)
  res.send('ok')
})

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params
  service.remove(_id)
  res.send('ok')
})

module.exports = router