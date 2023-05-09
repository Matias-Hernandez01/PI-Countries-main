const express = require('express');
const router = express.Router();
const countriesDB = require('../controllers/countries/countriesDB');

router.get('/', countriesDB);

module.exports = router;
