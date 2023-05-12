const searchByName = require('./searchByName');

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    const results = await searchByName(name);
    name && results
      ? res.status(200).json(results)
      : res.status(404).json({ message: '' });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Error al buscar pais por nombre' + error.message });
  }
};
