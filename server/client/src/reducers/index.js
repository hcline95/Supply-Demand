import { combineReducers } from 'redux';
import DataReducer from './data';
import MainGraphReducer from './mainGraph';
import EqualibriumReducer from './equalibrium';
import SuppliersReducer from './suppliers';
import StageReducer from './stage'
import TutorialReducer from './tutorial'


const rootReducer = combineReducers({
    Data: DataReducer,
    MainGraph: MainGraphReducer,
    Equalibrium: EqualibriumReducer,
    Suppliers: SuppliersReducer,
    Stage: StageReducer,
    Tutorial: TutorialReducer
});

export default rootReducer;