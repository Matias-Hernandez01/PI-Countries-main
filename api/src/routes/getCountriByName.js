const express = require('express');
const router = express.Router();
const getCountriesName = require('../controllers/countriesByName/getCountriesName');

router.get('/', getCountriesName);

module.exports = router;
