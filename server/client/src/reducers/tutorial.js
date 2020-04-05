  
import { SET_DEMAND_CURVE, SET_SUPPLY_CURVE } from '../actions/types';



export default function(state = {demandLine: 5, supplyLine: {y1:0, y2:5}, equalibrium: [{x: 2.5, y: 2.5}], color:''}, action) {
  switch (action.type) {
    case SET_DEMAND_CURVE:
      return Object.assign({}, state, {
        demandLine: action.payload.coordinate, equalibrium: action.payload.equalibrium, color: action.payload.color})
    
    case SET_SUPPLY_CURVE:
        return Object.assign({}, state, {
          supplyLine: action.payload.coordinate, equalibrium: action.payload.equalibrium, color: action.payload.color})
    
    default:
      return state;
  }
}