import WeatherCard from '../WeatherCard/WeatherCard';

import './Weather.css';

const Weather = ({ place, forecastData, currentData }) => {
  return (
    <div className="output-sec">
      <div className="location">
        {place.name}, {place.region}
      </div>
      <div className="card-row">
        <WeatherCard
          date={new Date(forecastData.forecastday[0].date)}
          condition={currentData.condition}
          mainTemp={currentData.temp_c}
          minTemp={forecastData.forecastday[0].day.mintemp_c}
          maxTemp={forecastData.forecastday[0].day.maxtemp_c}
        />
        <WeatherCard
          date={new Date(forecastData.forecastday[1].date)}
          condition={forecastData.forecastday[1].day.condition}
          mainTemp={forecastData.forecastday[1].day.avgtemp_c}
          minTemp={forecastData.forecastday[1].day.mintemp_c}
          maxTemp={forecastData.forecastday[1].day.maxtemp_c}
        />
        <WeatherCard
          date={new Date(forecastData.forecastday[2].date)}
          condition={forecastData.forecastday[2].day.condition}
          mainTemp={forecastData.forecastday[2].day.avgtemp_c}
          minTemp={forecastData.forecastday[2].day.mintemp_c}
          maxTemp={forecastData.forecastday[2].day.maxtemp_c}
        />
      </div>
    </div>
  );
};

export default Weather;