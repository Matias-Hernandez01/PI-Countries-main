const searchByName = require('./searchByName');

module.exports = async (req, res) => {
  try {
    const name = req.query.name;
    const results = await searchByName(name);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
