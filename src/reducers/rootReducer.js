import { combineReducers } from 'redux';
import dataReducer from './dataReducer.js'

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;