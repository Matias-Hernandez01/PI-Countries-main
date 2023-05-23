import { GET_API, GET_COUNTRY, FILTER, SEARCH, COUNTRY_DETAIL } from './type';
import axios from 'axios';

export const getApi = () => {
  return async (dispatch) => {
    const apiData = await axios.get('http://localhost:3001/countries');
    const countries = apiData.data;
    dispatch({ type: GET_API, payload: countries });
  };
};

export const getCountry = (name) => {
  return async (dispatch) => {
    const searchByName = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    const countries = searchByName.data;
    dispatch({ type: GET_COUNTRY, payload: countries });
  };
};

export const filter = (continent, population) => {
  return {
    type: FILTER,
    payload: [continent, population],
  };
};

export const searchByName = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};

export const countryDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: COUNTRY_DETAIL, payload: response.data });
  };
};
