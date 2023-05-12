const { Router } = require('express');
const CountriesController = require('../../controllers/countries');
const router = Router();
const controller = new CountriesController();

//* Obtener todos los paises.
router.get('/', controller.findAll);

//* Buscar pais por id.
router.get('/:id', controller.findOne);

module.exports = router;
