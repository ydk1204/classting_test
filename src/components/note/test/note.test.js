import React from 'react';
import renderer from 'react-test-renderer';
import Note from '../note';

const difficulty = '어려움';
const question = '동물이 아닌 것은?';
const incorrect = ['강아지', '고양이', '토끼'];
const correct = '빵';

describe('note', () => {
  it('renders', () => {
    const component = renderer.create(<Note difficulty={difficulty} question={question} incorrect={incorrect} correct={correct}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});