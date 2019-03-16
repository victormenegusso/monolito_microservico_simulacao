const escrituracaoApi = require('./escrituracaoApi')

module.exports = (app) => {
  app.use('/api/escrituracao', escrituracaoApi)
}