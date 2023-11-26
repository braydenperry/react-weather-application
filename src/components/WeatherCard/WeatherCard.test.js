import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherCard from './WeatherCard';

describe('WeatherCard component', () => {
  test('renders WeatherCard with correct props', () => {
    const date = new Date('2023-11-24T12:00:00Z');
    const condition = {
      text: 'Sunny',
    };
    const mainTemp = 25;
    const minTemp = 20;
    const maxTemp = 30;

    const { getByText } = render(
      <WeatherCard
        date={date}
        condition={condition}
        mainTemp={mainTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    );

    // Assert that the rendered component contains the expected elements and text
    expect(getByText('Friday')).toBeInTheDocument();
    expect(getByText('November 24, 2023')).toBeInTheDocument();
    expect(getByText('25°C')).toBeInTheDocument();
    expect(getByText('Sunny | 20, 30°C')).toBeInTheDocument();
  });
});
