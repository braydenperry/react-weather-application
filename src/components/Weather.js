import './Weather.css';

const Weather = (props) => {
  return (
    <div className="output-sec">
      <div className="location">
        {props.place.name}, {props.place.region}
      </div>
      <img src={props.currentData.condition.icon} alt="" />
      <div className="sky-status">{props.currentData.condition.text}</div>
      <div className="temp">Temperature : {props.currentData.temp_c}°C</div>
      <div className="humidity">Humidity : {props.currentData.humidity}</div>
      <div className="temp">Tomorrow's Average Temperature : {props.forecastData.forecastday[0].day.avgtemp_c}°C</div>
    </div>
  );
};

export default Weather;
