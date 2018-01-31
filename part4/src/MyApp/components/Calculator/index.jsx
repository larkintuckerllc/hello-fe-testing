/* eslint-disable import/no-named-as-default */
import React from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
  return (
    <div>
      <Display />
      <Button number={1} />
      <Button number={2} />
      <Button number={3} />
      <Button number={4} />
      <Button number={5} />
      <Button number={6} />
      <Button number={7} />
      <Button number={8} />
      <Button number={9} />
      <Button number={0} />
    </div>
  );
}
export default Calculator;
