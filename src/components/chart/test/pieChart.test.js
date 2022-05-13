import React from 'react';
import renderer from 'react-test-renderer';
import ScorePieChart from '../pieChart';

const answer = 7;
const wrong = 3;

describe('ScorePieChart', () => {
  it('renders', () => {
    const component = renderer.create(<ScorePieChart answer={answer} wrong={wrong} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});