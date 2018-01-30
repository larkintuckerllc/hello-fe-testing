import { combineReducers } from 'redux';
import first from '../ducks/first';

const reducers = {
  first,
};
export default combineReducers(reducers);
