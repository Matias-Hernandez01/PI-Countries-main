const axios = require('axios');
const { Country, Activity } = require('../../db');

class CountriesService {
  constructor() {}
  async findAll(name) {
    const findAllCountries = await Country.findAll({ limit: 100 });
    if (name) {
      const searchResults = await findAllCountries.filter((pais) =>
        pais.name.toLowerCase().includes(name.toLowerCase())
      );
      return searchResults;
    }
    return findAllCountries;
  }

  async countriesToDb() {
    const url = 'https://restcountries.com/v3/all';
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
    const resultado = await Country.bulkCreate(countries);
    return resultado;
  }
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

  async searchByName(name) {
    const findByName = await Country.findAll({ where: name });
  }
}

module.exports = CountriesService;
