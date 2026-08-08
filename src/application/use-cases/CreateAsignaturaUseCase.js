const AsignaturaRepositorio = require('../../infrastructure/repositories/AsignaturaRepositorio');

class CreateAsignaturaUseCase {

  constructor(AsignaturaRepositorio) {
    this.AsignaturaRepositorio = AsignaturaRepositorio;
  }

  async execute(studentData) {
    if (!studentData.code || !studentData.name || !studentData.email) {
      throw new Error('Todos los campos (code, name, email) son obligatorios.');
    }
    return await this.AsignaturaRepositorio.create(studentData);
  }
}

module.exports = CreateAsignaturaUseCase;