const CountriesService = require('../../services/countries');
const service = new CountriesService();

class CountriesController {
  constructor() {}
  //funcion findAll => recibe los datos de la BDD y los envia como respuesta.
  async findAll(req, res) {
    await service.checkingBDD();
    try {
      const response = await service.findAll();
      res.status(200).json(await response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  //* handler que busca por id recibida por params
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
  async searchByName(req, res) {
    await service.checkingBDD();
    try {
      const { name } = req.query;
      const response = await service.searchByName(name);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = CountriesController;
