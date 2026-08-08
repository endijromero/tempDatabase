const AsignaturaRepositorio = require('../../infrastructure/repositories/AsignaturaRepositorio');


class GetAsignaturasUseCase {
  constructor(AsignaturaRepositorio) {
    this.AsignaturaRepositorio = AsignaturaRepositorio;
  }

  async execute() {
    return await this.AsignaturaRepositorio.getAll();
  }



}
module.exports = GetAsignaturasUseCase;