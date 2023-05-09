const { Country } = require('../../db');
const axios = require('axios');
const url = 'https://restcountries.com/v3/all';

const countriesToDb = async () => {
  try {
    const countries = [];
    const response = await axios.get(url);
    await response.data.map((pais) => {
      countries.push({
        id: pais.cca3,
        name: pais.name.common,
        flagImage: pais.flags[0],
        continente: pais.continents,
        capital: pais.capital,
        subregion: pais.subregion,
        area: pais.area,
        poblacion: pais.population,
      });
    });
    const resultado = await Country.bulkCreate(countries);
    return resultado;
  } catch (error) {
    console.log(error.message);
  }
};
countriesToDb();

module.exports = countriesToDb;
