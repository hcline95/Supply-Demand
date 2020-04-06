  
import { SET_DEMAND_CURVE, SET_SUPPLY_CURVE } from '../actions/types';



export default function(state = {demandLine: 5, supplyLine: {y1:0, y2:5}, equalibrium: [{x: 2.5, y: 2.5}], color:'', quantity:[{'Quantity': 250}]}, action) {
  switch (action.type) {
   
    case SET_DEMAND_CURVE:
      return Object.assign({}, state, {
        demandLine: action.payload.coordinate, equalibrium: action.payload.equalibrium, color: action.payload.color, quantity: [...state.quantity, {'Quantity': action.payload.equalibrium[0].x * 100}]})
    
    case SET_SUPPLY_CURVE:
        return Object.assign({}, state, {
          supplyLine: action.payload.coordinate, equalibrium: action.payload.equalibrium, color: action.payload.color, quantity: [...state.quantity, {'Quantity': action.payload.equalibrium[0].x * 100}]})
    
    default:
      return state;
  }
}