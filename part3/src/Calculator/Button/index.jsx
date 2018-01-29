import React from 'react';
import PropTypes from 'prop-types';

function Button({ number }) {
  return (
    <div>{number.toString()}</div>
  );
}
Button.propTypes = {
  number: PropTypes.number.isRequired,
};
export default Button;
