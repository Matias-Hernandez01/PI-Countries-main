import { GET_API, GET_COUNTRY, FILTER } from '../actions/type';
import { applyFilter } from './utils';
const initialState = {
  allCountries: [],
  aux: [],
};

const rootReducer = (State = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...State,
        allCountries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...State,
        allCountries: action.payload,
      };
    case FILTER: {
      const continent = action.payload[0];
      const population = action.payload[1];
      const countries = [...State.allCountries];
      const resultado = applyFilter(countries, continent, population);
      return {
        ...State,
        aux: resultado,
      };
    }

    default:
      return { ...State };
  }
};

export default rootReducer;
