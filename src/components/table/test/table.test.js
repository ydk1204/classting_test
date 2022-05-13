import React from "react";
import renderer from 'react-test-renderer';
import Table from '../table';

const tableHead = ['안녕', '하세요'];
const resultData = ['감사해요', '잘있어요'];

describe('Table', () => {
  it('renders', () => {
    const component = renderer.create(<Table tableHead={ tableHead} resultData={resultData} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});