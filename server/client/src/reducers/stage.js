  
import { FETCH_STAGE } from '../actions/types';



export default function(state = 1, action) {
  switch (action.type) {
    case FETCH_STAGE:
      return action.payload
    default:
      return state;
  }
}