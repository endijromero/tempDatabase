const Asignatura = require('../../domain/entities/Asignatura');
const IAsignaturaRepositorio = require('../../domain/repositories/IAsignaturaRepositorio');


class AsignaturaRepositorio extends IAsignaturaRepositorio {

  constructor(dbPool) {
    super();
    this.dbPool = dbPool; // Inyección del pool de conexión (Local o GCP)
  }

  async getAll() {
    const result = await this.dbPool.query('SELECT code, nombre, year FROM asignaturas');
    return result.rows.map(row => new Asignatura(row));
  }

  async create(asignaturaData) {
    const { code, name, email } = asignaturaData;
    const result = await this.dbPool.query('INSERT INTO asignaturas (code, nombre, year) VALUES ($1, $2, $3) RETURNING *',
      [code, name, email]
    );
    return new Asignatura(result.rows[0]);
  }
}
module.exports = AsignaturaRepositorio;