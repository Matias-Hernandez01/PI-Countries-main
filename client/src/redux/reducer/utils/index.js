const aplyFilter = (data, continent, population) => {
  if (continent) {
    const results = data.filter((country) => {
      if (continent === 'Activity' && country.activity) {
        return country;
      } else {
        country.continent === continent;
      }
      return results;
    });
    if (population) {
      switch (population) {
        case 'A-Z': {
          results.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
        }
        case 'Z-A': {
          results.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          });
        }
        case '+': {
          results.sort((a, b) => {
            if (a.poblacion < b.poblacion) return 1;
            if (a.poblacion > b.poblacion) return -1;
            return 0;
          });
        }
        case '-': {
          results.sort((a, b) => {
            if (a.poblacion < b.poblacion) return -1;
            if (a.poblacion > b.poblacion) return 1;
            return 0;
          });
          break;
        }
      }
    }
    return results;
  }
};

module.exports = {
  aplyFilter,
};
