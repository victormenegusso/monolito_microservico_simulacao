const notasApi = require('./notasApi')  

module.exports = (app) => {
  app.use('/api/notas', notasApi)
}