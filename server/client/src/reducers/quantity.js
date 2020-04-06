  
import { FETCH_QUANTITY } from '../actions/types';



export default function(state = 50, action) {
  switch (action.type) {
    case FETCH_QUANTITY:
      return action.payload
    default:
      return state;
  }
}