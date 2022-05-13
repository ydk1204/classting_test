import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../progressBar';

const value = 0;
const questionNumber = 3;

describe('ProgressBar', () => {
  it('renders', () => {
    const component = renderer.create(<ProgressBar value={value} questionNumber={questionNumber} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});