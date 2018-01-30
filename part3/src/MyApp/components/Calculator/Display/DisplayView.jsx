import React from 'react';
import PropTypes from 'prop-types';

function Display({ first }) {
  return (
    <div>{first !== null && first}</div>
  );
}
Display.propTypes = {
  first: PropTypes.number,
};
Display.defaultProps = {
  first: null,
};
export default Display;
