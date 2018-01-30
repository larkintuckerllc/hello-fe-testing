import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromFirst from '../../../ducks/first';

export function Display({ first }) {
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
export default connect(
  state => ({
    first: fromFirst.getFirst(state),
  }),
  null,
)(Display);
