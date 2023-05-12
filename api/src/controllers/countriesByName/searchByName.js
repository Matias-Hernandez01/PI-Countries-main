const { Countries, Activity } = require('../../db');

const searchByName = async (name) => {
  await Countries.findAll({
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
};

module.exports = searchByName;
