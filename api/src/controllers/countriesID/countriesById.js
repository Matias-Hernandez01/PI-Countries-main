const { Country, Activity } = require('../../db');

module.exports = async (id) => {
  const countrieById = await Country.findByPk(id.toUpperCase(), {
    include: [
      {
        model: Activity,
        attributes: ['name', 'dificultad', 'duracion', 'temporada'],
        through: { attributes: [] },
      },
    ],
  });
  return countrieById;
};
