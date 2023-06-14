const { Router } = require('express');
const router = Router();
const countryRouter = require('./countries');
const activityRouter = require('./activities');

router.use('/countries', countryRouter);
router.use('/activities', activityRouter);
module.exports = router;
