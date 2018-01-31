import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../Button';

Enzyme.configure({ adapter: new Adapter() });
const setup = (propOverrides) => {
  const props = {
    number: 0,
    setFirst: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<Button {...props} />),
  });
};
describe('Button component', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
  it('calls setFirst on click', () => {
    const NUMBER = 1;
    const { props: { setFirst }, wrapper } = setup({ number: NUMBER });
    wrapper.simulate('click');
    expect(setFirst.mock.calls).toHaveLength(1);
    expect(setFirst.mock.calls[0][0]).toBe(NUMBER);
  });
});
