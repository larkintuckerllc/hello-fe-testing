import { connect } from 'react-redux';
import * as fromFirst from '../../../ducks/first';
import DisplayView from './DisplayView';

export default connect(
  state => ({
    first: fromFirst.getFirst(state),
  }),
  null,
)(DisplayView);
