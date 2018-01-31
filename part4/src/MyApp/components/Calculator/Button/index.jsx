import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromFirst from '../../../ducks/first';

export function Button({ number, setFirst }) {
  return (
    <button
      className="calculator__button"
      onClick={() => setFirst(number)}
    >
      {number.toString()}
    </button>
  );
}
Button.propTypes = {
  number: PropTypes.number.isRequired,
  setFirst: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    setFirst: fromFirst.setFirst,
  },
)(Button);
