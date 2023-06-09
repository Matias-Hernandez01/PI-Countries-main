import {
  GET_API,
  GET_COUNTRY,
  COUNTRY_DETAIL,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES,
  FILTER,
} from '../actions/type';
import { applyFilter } from './utils';
const initialState = {
  allCountries: [],
  aux: [],
  detail: [],
  nameLanding: '',
  activities: [],
  search: [],
};

const rootReducer = (State = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...State,
        allCountries: action.payload,
        aux: action.payload,
      };
    case GET_COUNTRY:
      const results =
        action.payload.length >= 1 ? action.payload : [...State.aux];

      return {
        ...State,
        aux: results,
      };

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
