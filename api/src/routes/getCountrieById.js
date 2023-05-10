const express = require('express');
const router = express.Router();
const getCountriesById = require('../controllers/countriesID/getCountriesById');

router.get('/:id', getCountriesById);

module.exports = router;
