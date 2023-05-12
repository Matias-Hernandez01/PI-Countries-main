const countriesById = require('./countriesById');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await countriesById(id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
