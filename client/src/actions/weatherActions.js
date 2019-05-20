import axios from 'axios';
import {GET_WEATHER, WEATHER_LOADING} from './types';

export const getWeather = () => dispatch => {
  dispatch(setWeatherLoading());
  axios
    .get('http://localhost:5000/get-city')
    .then(res => 
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      }))
    .catch((err) => {
      dispatch({type: "No Weather Found", payload: err})
    });
}

export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  }
}