import {GET_WEATHER} from '../actions/types';

const initialState = {
  weather: {
    image: 'poop',
    temperature: '75 degrees',
    city: 'Los Angeles',
    description: 'It is sunny'
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER:
      return {
        ...state
      }
    default:
      return state;
  }
}