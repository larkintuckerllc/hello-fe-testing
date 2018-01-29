import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button number={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
