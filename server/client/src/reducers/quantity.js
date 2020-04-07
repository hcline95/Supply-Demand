  
import { FETCH_QUANTITY } from '../actions/types';



export default function(state = {quantity:[{'Quantity': 50}]}, action) {
  switch (action.type) {
    case FETCH_QUANTITY:
      return Object.assign({}, state, {
        quantity: [...state.quantity, action.payload]
    })
    default:
      return state;
  }
}