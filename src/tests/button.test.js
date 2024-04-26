import React from 'react';
import Button from '../components/button';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
  test('renders with the correct label', () => {
    const { getByTestId } = render(<Button>Click me</Button>); // Передаем текст как children
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe('Click me');
  });

  test('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock}>Click me</Button>); // Передаем текст как children
    const buttonElement = getByTestId('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});