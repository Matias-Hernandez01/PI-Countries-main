import {
  GET_API,
  GET_COUNTRY,
  FILTER,
  SEARCH,
  COUNTRY_DETAIL,
} from '../actions/type';
import { applyFilter, searchByName } from './utils';
const initialState = {
  allCountries: [],
  aux: [],
  detail: [],
  nameLanding: '',
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
    case SEARCH: {
      const allCountries = [...State.allCountries];
      const aux = [...State.aux];
      const searchResult = searchByName(
        allCountries,
        aux,
        action.payload.valueSearch
      );
      console.log(action.payload);
      return {
        ...State,
        aux: searchResult,
      };
    }

    case COUNTRY_DETAIL: {
      return {
        ...State,
        detail: action.payload,
      };
    }

    default:
      return { ...State };
  }
};

export default rootReducer;
