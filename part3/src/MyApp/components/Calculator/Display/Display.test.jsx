import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Display } from '../Display';

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders with number without crashing', () => {
  shallow(<Display first={1} />);
});
it('shallow renders with null without crashing', () => {
  shallow(<Display first={null} />);
});
