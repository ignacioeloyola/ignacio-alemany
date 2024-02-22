import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyCalendar from './MyCalendar';

describe('<MyCalendar />', () => {
  test('it should mount', () => {
    render(<MyCalendar />);
    
    const myCalendar = screen.getByTestId('MyCalendar');

    expect(myCalendar).toBeInTheDocument();
  });
});