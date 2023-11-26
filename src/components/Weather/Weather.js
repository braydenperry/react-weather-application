import WeatherCard from '../WeatherCard/WeatherCard';
import './Weather.css';

const Weather = ({ place, forecastData, currentData }) => {
  return (
    <div className="output-sec">
      <div className="location">
        {place.name}, {place.region}
      </div>
      <div className="card-row">
        {forecastData.forecastday.map((day, index) => (
          <WeatherCard
            key={index}
            date={new Date(day.date)}
            condition={index === 0 ? currentData.condition : day.day.condition}
            mainTemp={index === 0 ? currentData.temp_c : day.day.avgtemp_c}
            minTemp={day.day.mintemp_c}
            maxTemp={day.day.maxtemp_c}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;