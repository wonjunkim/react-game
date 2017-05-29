import { combineReducers } from 'redux';
import enhance from './enhance';
import headLayers from './headLayers';

const rootReducer = combineReducers({
    enhance,
    headLayers
})

export default rootReducer;