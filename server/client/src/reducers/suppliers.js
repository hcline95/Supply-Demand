  
import { FETCH_SUPPLIERS } from '../actions/types';



export default function(state = [{id: 1, stage: 1, brand: "Purrell®", quanity_produced: 20}, {id: 2, stage: 1, brand: "Germ-X®", quanity_produced: 15}, {id: 3, stage: 1, brand: "Wet Ones®", quanity_produced: 8}, {id: 4, stage: 1, brand: "Nice 'N Clean ®", quanity_produced: 3}, {id: 5, stage: 1, brand: "Other", quanity_produced: 5}], action) {
  switch (action.type) {
    case FETCH_SUPPLIERS:
      return action.payload
    default:
      return state;
  }
}
