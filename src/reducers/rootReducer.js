import { combineReducers } from 'redux';
import dataReducer from './models/dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;