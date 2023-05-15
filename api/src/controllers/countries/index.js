const CountriesService = require('../../services/countries');
const service = new CountriesService();

class CountriesController {
  constructor() {}

  async findAll(req, res) {
    await service.checkingBDD();
    const { name } = req.query;
    try {
      const response = await service.findAll(name);
      res.status(200).json(await response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findOne(req, res) {
    await service.checkingBDD();
    try {
      const { id } = req.params;
      const response = await service.findOne(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = CountriesController;
