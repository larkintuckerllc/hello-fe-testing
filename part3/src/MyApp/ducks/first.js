import { createAction, handleActions } from 'redux-actions';

export const setFirst = createAction('SET_FIRST');
export const clearFirst = createAction('CLEAR_FIRST');
export default handleActions({
  [setFirst](_, action) {
    return action.payload;
  },
  [clearFirst]() {
    return null;
  },
}, null);
export const getFirst = state => state.first;
