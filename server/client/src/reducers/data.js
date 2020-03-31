  
import { FETCH_DATA } from '../actions/types';



export default function(state = {data:[]}, action) {
    console.log('action in data reducer', action.payload)
    console.log('state', state)
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        data: [...state.data, action.payload]
    })
    default:
      return state;
  }
}