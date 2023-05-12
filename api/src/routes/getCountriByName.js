const express = require('express');
const router = express.Router();
const countriesByName = require('../controllers/countriesByName/getCountriesName');

router.get('/?name', countriesByName);

module.exports = router;
