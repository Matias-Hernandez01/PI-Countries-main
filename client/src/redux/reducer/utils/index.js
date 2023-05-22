const applyFilter = (data, continent, population) => {
  if (continent) {
    const results = data.filter((country) => {
      if (continent === 'Activity') {
        return country.activities;
      } else {
        return country.continent === continent;
      }
    });

    if (population) {
      switch (population) {
        case 'A-Z': {
          results.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          break; // Agregar break aquí
        }
        case 'Z-A': {
          results.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          });
          break; // Agregar break aquí
        }
        case '+': {
          results.sort((a, b) => {
            if (a.poblacion < b.poblacion) return 1;
            if (a.poblacion > b.poblacion) return -1;
            return 0;
          });
          break; // Agregar break aquí
        }
        case '-': {
          results.sort((a, b) => {
            if (a.poblacion < b.poblacion) return -1;
            if (a.poblacion > b.poblacion) return 1;
            return 0;
          });
          break; // Agregar break aquí
        }
        default: {
          return;
        }
      }
    }

    return results;
  }

  return data;
};

const searchByName = (allCountries, aux, value) => {
  const valueString = value.toString().toLowerCase();
  if (allCountries.length) {
    const data = allCountries.filter((country) =>
      country.name.toLowerCase().includes(valueString)
    );
    return data;
  }
};

module.exports = {
  applyFilter,
  searchByName,
};
