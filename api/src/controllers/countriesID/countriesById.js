const { Country } = require('../../db');

module.exports = async (id) => {
  const countrieById = await Country.findOne({
    where: { id: id.toUpperCase() },
  });
  return countrieById;
};
