  
import { FETCH_DATA, RESET_DATA } from '../actions/types';



export default function(state = {data:[{value: 2.56}]}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        data: [...state.data, action.payload]
    })
    case RESET_DATA:
      return {data:[{name: "Day 1", value: 2.56}]}
    default:
      return state;
  }
}