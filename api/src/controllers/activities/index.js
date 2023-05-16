const ActivityService = require('../../services/activities');
const service = new ActivityService();
const CountriesService = require('../../services/countries');
const basesDatos = new CountriesService();

class ActivityControllers {
  constructor() {}

  async createActivity(req, res) {
    await basesDatos.checkingBDD();
    const { name, dificultad, duracion, temporada, countries } = req.body;
    // const activity = [name, dificultad, duracion, temporada, countries];
    try {
      const response = await service.createActivity(
        name,
        dificultad,
        duracion,
        temporada,
        countries
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = ActivityControllers;
