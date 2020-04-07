  
import { FETCH_DIARY} from '../actions/types';

export default function(state = {diary:[]}, action) {
  switch (action.type) {
    case FETCH_DIARY:
      return Object.assign({}, state, {
        diary: [...state.diary, action.payload]
    })
    default:
      return state;
  }
}