import {GET_WEATHER, WEATHER_LOADING} from '../actions/types';

// {
//   city: "SEATTLE",
//   temperature: 60,
//   description: "clear sky",
//   icon: "01n"
//   }

const initialState = {
  weather: '',
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload.weather,
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