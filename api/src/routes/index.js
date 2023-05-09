const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllCountries = require('./getAllCountries');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', getAllCountries);
module.exports = router;
