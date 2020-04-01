import { combineReducers } from 'redux';
import DataReducer from './data';
import MainGraphReducer from './mainGraph';
import EqualibriumReducer from './equalibrium';


const rootReducer = combineReducers({
    Data: DataReducer,
    MainGraph: MainGraphReducer,
    Equalibrium: EqualibriumReducer
});

export default rootReducer;