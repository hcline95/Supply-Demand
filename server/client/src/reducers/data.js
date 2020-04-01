  
import { FETCH_DATA } from '../actions/types';



export default function(state = {data:[{name: "Day 1", value: 2.5}]}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        data: [...state.data, action.payload]
    })
    default:
      return state;
  }
}