import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from './Weather';

// Mock WeatherCard component
jest.mock('../WeatherCard/WeatherCard', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-weather-card">Mock WeatherCard</div>,
}));

describe('Weather component', () => {
  test('renders Weather component with correct data', () => {
    const place = {
      name: 'City',
      region: 'Region',
    };

    const forecastData = {
      forecastday: [
        {
          date: '2023-11-24',
          day: {
            condition: {
              text: 'Sunny',
            },
            avgtemp_c: 25,
            mintemp_c: 20,
            maxtemp_c: 30,
          },
        },
        {
            date: '2023-12-24',
            day: {
              condition: {
                text: 'Sunny',
              },
              avgtemp_c: 25,
              mintemp_c: 20,
              maxtemp_c: 30,
            },
          },
          {
            date: '2023-13-24',
            day: {
              condition: {
                text: 'Sunny',
              },
              avgtemp_c: 25,
              mintemp_c: 20,
              maxtemp_c: 30,
            },
          },
      ],
    };

    const currentData = {
      condition: {
        text: 'Sunny',
      },
      temp_c: 25,
    };

    const { getByText, getAllByTestId } = render(
      <Weather place={place} forecastData={forecastData} currentData={currentData} />
    );

    // Assert that the rendered component contains the expected elements and data
    expect(getByText('City, Region')).toBeInTheDocument();

    // Assert that WeatherCard is rendered for each forecast day
    const weatherCardElements = getAllByTestId('mock-weather-card');
    expect(weatherCardElements).toHaveLength(3);
  });
});
