import { combineReducers } from 'redux';
import { dataReducer } from './models/dataReducer.js'

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;