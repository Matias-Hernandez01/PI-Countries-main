import { GET_API, GET_COUNTRY, FILTER } from '../actions/type';
import { aplyFilter } from './utils';
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
      return {
        ...State,
        aux: aplyFilter(
          [...allCountries],
          payload.continent,
          payload.population
        ),
      };
    }

    default:
      return { ...State };
  }
};

export default rootReducer;
