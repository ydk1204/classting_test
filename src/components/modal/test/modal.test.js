import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../modal';

const setIsModal = false;

describe('Modal', () => {
  it('renders', () => {
    const component = renderer.create(<Modal setIsModal={setIsModal} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});