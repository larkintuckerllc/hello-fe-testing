import React from 'react';
import PropTypes from 'prop-types';

function ButtonView({ number, setFirst }) {
  return (
    <button
      onClick={() => setFirst(number)}
    >
      {number.toString()}
    </button>
  );
}
ButtonView.propTypes = {
  number: PropTypes.number.isRequired,
  setFirst: PropTypes.func.isRequired,
};
export default ButtonView;
