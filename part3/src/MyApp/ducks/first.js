import { createAction, handleActions } from 'redux-actions';

export const setFirst = createAction('SET_FIRST');
export const clearFirst = createAction('CLEAR_FIRST');
export default handleActions({
  [setFirst](_, { payload }) {
    if (
      !Number.isInteger(payload) ||
      payload < 0 ||
      payload > 9
    ) throw new Error();
    return payload;
  },
  [clearFirst]() {
    return null;
  },
}, null);
export const getFirst = state => state.first;
