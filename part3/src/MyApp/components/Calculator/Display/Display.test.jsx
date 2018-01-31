import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Display } from '../Display';

Enzyme.configure({ adapter: new Adapter() });
describe('shallow renders without crashing', () => {
  it('shallow renders without crashing with number', () => {
    shallow(<Display first={1} />);
  });
  it('shallow renders without crashing with null', () => {
    shallow(<Display first={null} />);
  });
});
