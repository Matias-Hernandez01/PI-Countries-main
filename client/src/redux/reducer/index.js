import { GET_API, GET_COUNTRY } from '../type';

const initialState = {
  allCountries: [],
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

    default:
      return { ...State };
  }
};

export default rootReducer;
