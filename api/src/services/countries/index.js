const axios = require('axios');
const { Country, Activity } = require('../../db');
const { Op } = require('sequelize');

class CountriesService {
  constructor() {}

  async checkingBDD() {
    const response = await Country.findAll();
    if (response.length === 0) {
      return await this.countriesToDb();
    }
  }
  //*funcion findAll => recibe los datos de la BDD y los envia como respuesta.
  async findAll(name) {
    if (name) {
      const findByName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: [
          {
            model: Activity,
            attributes: ['name', 'dificultad', 'duracion', 'temporada'],
            through: { attributes: [] },
          },
        ],
      });
      return findByName;
    }
    return await Country.findAll();
  }

  async countriesToDb() {
    const url = 'https://rest-countries.up.railway.app/v3/all';
    const countries = [];
    const response = await axios.get(url);
    await response.data.map((pais) => {
      countries.push({
        id: pais.cca3,
        name: pais.name.common,
        flagImage: pais.flags[0],
        continent: pais.continents[0],
        capital: pais.capital ? pais.capital[0] : 'No hay capital',
        subregion: pais.subregion,
        area: pais.area,
        poblacion: pais.population,
      });
    });

    await Country.bulkCreate(countries);
    return await Country.findAll({
      include: [
        {
          model: Activity,
          attributes: ['name', 'dificultad', 'duracion', 'temporada'],
          through: { attributes: [] },
        },
      ],
    });
  }

  //* handlers que busca por id recibida por params
  async findOne(id) {
    const countryById = await Country.findByPk(id.toUpperCase(), {
      include: [
        {
          model: Activity,
          attributes: ['name', 'dificultad', 'duracion', 'temporada'],
          through: { attributes: [] },
        },
      ],
    });
    return countryById;
  }
}

module.exports = CountriesService;
