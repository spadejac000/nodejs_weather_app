import axios from 'axios';
import {GET_WEATHER, WEATHER_LOADING} from './types';

export const getWeather = () => dispatch => {
  dispatch(setWeatherLoading());
  axios
    .get('http://localhost:5000')
    .then(res => 
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      }))
}

export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  }
}