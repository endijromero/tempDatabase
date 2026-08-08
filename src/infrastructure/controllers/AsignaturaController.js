const GetAsignaturaUseCase = require('../../application/use-cases/GetAsignaturasUseCase');
const CreateAsignaturaUseCase = require('../../application/use-cases/CreateAsignaturaUseCase');

class AsignaturaController {

  constructor(asignaturaRepository) {
    this.getAsignaturaUseCase = new GetAsignaturaUseCase(asignaturaRepository);
    this.createAsignaturaUseCase = new CreateAsignaturaUseCase(asignaturaRepository);
  }

  async getAsignaturas(req, res) {
    try {
      const asignaturas = await this.getAsignaturas.execute();
      res.status(200).json({ success: true, data: asignaturas });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async createAsignatura(req, res) {
    try {
      const newAsignatura = await this.createAsignaturaUseCase.execute(req.body);
      res.status(201).json({ success: true, data: newAsignatura });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
module.exports = AsignaturaController;