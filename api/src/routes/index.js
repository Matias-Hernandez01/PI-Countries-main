const { Router } = require('express');
const router = Router();
const countryRouter = require('./countries');

router.use('/countries', countryRouter);

module.exports = router;
