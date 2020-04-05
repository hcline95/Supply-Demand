  
import { FETCH_GRAPH } from '../actions/types';



export default function(state = {demand: [{x: 0, y: 5}, {x: 100, y: 0}], supply: [{x: 0, y: 0}, {x: 100, y: 5}], equalibrium: 0}, action) {
  switch (action.type) {
    case FETCH_GRAPH:
      return action.payload
    default:
      return state;
  }
}
