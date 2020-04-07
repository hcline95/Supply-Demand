  
import { FETCH_DIARY} from '../actions/types';

export default function(state = {diary:[{day: 'Day 1', price: 2.56, quantity: 50, description:'Market is stable'}]}, action) {
  switch (action.type) {
    case FETCH_DIARY:
      return Object.assign({}, state, {
        diary: [...state.diary, action.payload]
    })
    default:
      return state;
  }
}