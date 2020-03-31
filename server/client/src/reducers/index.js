import { combineReducers } from 'redux';
import DataReducer from './data';


const rootReducer = combineReducers({
    Data: DataReducer
});

export default rootReducer;