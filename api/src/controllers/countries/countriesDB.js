const { Country } = require('../../db');
const getCountries = require('./getCountries');

module.exports = async (req, res) => {
  try {
    const countries = await Country.findAll({ limit: 100 });
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
