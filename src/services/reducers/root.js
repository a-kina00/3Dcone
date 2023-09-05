import { combineReducers } from 'redux';

import { valueList } from './values.js';

const rootReducer = combineReducers({
  values: valueList
})

export { rootReducer }