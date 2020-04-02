import { combineReducers } from 'redux';
import DataReducer from './data';
import MainGraphReducer from './mainGraph';
import EqualibriumReducer from './equalibrium';
import SuppliersReducer from './suppliers';


const rootReducer = combineReducers({
    Data: DataReducer,
    MainGraph: MainGraphReducer,
    Equalibrium: EqualibriumReducer,
    Suppliers: SuppliersReducer
});

export default rootReducer;