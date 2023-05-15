const { Router } = require('express');
const CountriesController = require('../../controllers/countries');
const router = Router();
const controller = new CountriesController(); //*instancio la clase CountriesController, donde tengo todas las funciones de los controllers

//* Obtener todos los paises.
router.get('/', controller.findAll);
router.get('/', controller.searchByName);

//* Buscar pais por id.
router.get('/:id', controller.findOne);

module.exports = router;
