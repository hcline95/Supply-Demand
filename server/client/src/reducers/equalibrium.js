import { FETCH_EQUALIBRIUM } from '../actions/types';

export default function(state = {status:[{"shortage": 0 }]}, action) {
  switch (action.type) {
    case FETCH_EQUALIBRIUM:
        if (action.payload <= 0){
            return Object.assign({}, state, {
                status: [...state.status, {'shortage': action.payload}]
            }) 
        }else {
            return Object.assign({}, state, {
                status: [...state.status, {'surplus': action.payload}]
        })
    }
    default:
      return state;
  }
}