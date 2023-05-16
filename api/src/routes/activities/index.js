const { Router } = require('express');
const ActivityController = require('../../controllers/activities');
const router = Router();
const controller = new ActivityController();

//*Ruta para crear actividad
router.post('/', controller.createActivity);

//*Ruta para recibir todas las actividades
router.get('/', controller.allActivities);

module.exports = router;
