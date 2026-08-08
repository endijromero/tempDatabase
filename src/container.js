const dbPool = require('./infrastructure/database/dbFactory');
const AsignaturaRepositorio = require('./infrastructure/repositories/AsignaturaRepositorio');

const asignaturaRepository = new AsignaturaRepositorio(dbPool);

module.exports = {
  asignaturaRepository,


};