const CountriesService = require('../../services/countries');
const service = new CountriesService();

class CountriesController {
  constructor() {}
  async findAll(req, res) {
    try {
      const { name } = req.query;
      await service.countriesToDb();
      const response = await service.findAll(name);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const response = await service.findOne(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async searchByName(req, res) {
    try {
      const { name } = req.query;
      const results = await searchByName(name);
      res.status(200).json(results);
    } catch (error) {
      res
        .status(400)
        .json({ error: 'Error al buscar pais por nombre' + error.message });
    }
  }
}

module.exports = CountriesController;
