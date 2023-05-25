import {
  GET_API,
  GET_COUNTRY,
  FILTER,
  SEARCH,
  COUNTRY_DETAIL,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES,
} from '../actions/type';
import { applyFilter, searchByName } from './utils';
const initialState = {
  allCountries: [],
  aux: [],
  detail: [],
  nameLanding: '',
  activities: [],
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

    case GET_ACTIVITIES: {
      return {
        ...State,
        activities: action.payload,
      };
    }

    case FILTER_ACTIVITIES: {
      const activities = [...State.activities];
      const countries = [...State.allCountries];
      const activity = action.payload;
      let countriesFinal = [];
      let activityByCountry = activities.filter((element) => {
        if (activity === element.name) {
          return element.countries;
        }
      });
      const nameCountries = [];
      for (let i = 0; i < activityByCountry.length; i++) {
        nameCountries.push(activityByCountry[i].countries[0].name);
      }

      for (let name of nameCountries) {
        countries.map((element) => {
          if (name === element.name) countriesFinal.push(element);
        });
      }

      return {
        ...State,
        aux: countriesFinal,
      };
    }

    default:
      return { ...State };
  }
};

export default rootReducer;
