import {GET_WEATHER, WEATHER_LOADING} from '../actions/types';

const initialState = {
  weather: '',
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false
      }
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}