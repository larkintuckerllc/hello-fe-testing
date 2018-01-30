import { connect } from 'react-redux';
import * as fromFirst from '../../../ducks/first';
import ButtonView from './ButtonView';

export default connect(
  null,
  {
    setFirst: fromFirst.setFirst,
  },
)(ButtonView);
