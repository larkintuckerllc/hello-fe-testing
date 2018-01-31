import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Display } from '../Display';

Enzyme.configure({ adapter: new Adapter() });
const setup = (propOverrides) => {
  const props = {
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<Display{...props} />),
  });
};
describe('Display component', () => {
  describe('shallow renders without crashing', () => {
    it('with first property undefined', () => {
      setup({});
    });
    it('with first property number', () => {
      setup({ first: 1 });
    });
    it('with first property null', () => {
      setup({ first: null });
    });
  });
});
