  
import { FETCH_SUPPLIERS } from '../actions/types';



export default function(state = [{id: 1, stage: 1, brand: "Purrell®", quantity_produced: 20}, {id: 2, stage: 1, brand: "Germ-X®", quantity_produced: 15}, {id: 3, stage: 1, brand: "Wet Ones®", quantity_produced: 8}, {id: 4, stage: 1, brand: "Nice 'N Clean ®", quantity_produced: 3}, {id: 5, stage: 1, brand: "Other", quantity_produced: 5}], action) {
  switch (action.type) {
    case FETCH_SUPPLIERS:
      return action.payload
    default:
      return state;
  }
}
