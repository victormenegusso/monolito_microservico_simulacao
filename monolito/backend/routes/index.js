const escrituracaoApi = require('./escrituracaoApi')
const notasApi = require('./notasApi')  

module.exports = (app) => {
  app.use('/api/escrituracao', escrituracaoApi)
  app.use('/api/notas', notasApi)
}