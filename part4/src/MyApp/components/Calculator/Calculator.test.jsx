import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from '../Calculator';

Enzyme.configure({ adapter: new Adapter() });
const setup = (propOverrides) => {
  const props = {
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<Calculator{...props} />),
  });
};
describe('Calculator component', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});
