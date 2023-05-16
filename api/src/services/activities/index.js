const { Activity, Country } = require('../../db');

class ActivityService {
  constructor() {}

  //*handler que crea una nueva actividad
  async createActivity(activities) {
    const countries = activities[4];
    const findCountries = await Country.findAll({ where: { name: countries } });
    if (findCountries.length === 0) throw Error('No se encontraron paises');
    const activitiesRepeat = await Activity.findAll({
      where: {
        name: activities[0],
        dificultad: activities[1],
        duracion: activities[2],
        temporada: activities[3],
      },
    });

    if (activitiesRepeat.length) {
      return { message: 'Ya existe la actividad que intenta crear' };
    }

    for (const country of findCountries) {
      const newActivity = await Activity.create({
        name: activities[0],
        dificultad: activities[1],
        duracion: activities[2],
        temporada: activities[3],
      });

      await country.addActivity(newActivity);
    }
    if (findCountries.length > 1) {
      return {
        message: 'Actividad creada correctamente en los paises indicados',
      };
    } else if (findCountries.length === 1) {
      return { message: 'Actividad creada correctamente en el pais indicado' };
    }
    throw new Error('Faltan datos para crear la actividad');
  }

  //*handlers que retorna todas las actividades creadas en mi BDD.
  async allActivities() {
    const activities = await Activity.findAll();
    return activities;
  }
}

module.exports = ActivityService;
