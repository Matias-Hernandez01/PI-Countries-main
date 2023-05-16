const { Activity, Country } = require('../../db');

class ActivityService {
  constructor() {}

  async createActivity(name, dificultad, duracion, temporada, countries) {
    const response = await Country.findAll();

    const findCountries = await Country.findAll({
      where: { name: countries },
    });

    console.log(findCountries);

    if (findCountries.length === O) throw Error('No se encontraron paises');
  }
}

module.exports = ActivityService;
