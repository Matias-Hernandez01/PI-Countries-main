const { Country, Activity } = require('../../db');
const { Op } = require('sequelize');

const searchByName = async (name) => {
  const countriesDb = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [
      {
        model: Activity,
        attributes: ['name', 'dificultad', 'duracion', 'temporada'],
        through: { atrtributes: [] },
      },
    ],
  });
  return countriesDb;
};

module.exports = searchByName;
