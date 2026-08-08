const express = require('express');
const router = express.Router();

const { asignaturaRepository } = require('../../container');
const asignaturaController = require('../controllers/AsignaturaController');

const controller = new asignaturaController(asignaturaRepository);

router.get('/', (req, res) => controller.getAsignaturas(req, res));
router.post('/', (req, res) => controller.createAsignatura(req, res));

module.exports = router;