import './Weather.css';

const Weather = (props) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dates = [];

  for (var i = 0; i < 3; i++) {
    if (props.forecastData.forecastday[i]) {
      dates.push(new Date(props.forecastData.forecastday[i].date));
    }
  }

  return (
    <div className="output-sec">
      <div className="location">
        {props.place.name}, {props.place.region}
      </div>
      <div className="card-row">
        <div className="card">
          <h5>{daysOfWeek[dates[0].getDay()]}</h5>
          <h6>{`${dates[0].getUTCDate()} ${months[dates[0].getUTCMonth()]}, ${dates[0].getUTCFullYear()}`}</h6>
          <img src={props.currentData.condition.icon} alt="" />
          <h1>{props.currentData.temp_c}°C</h1>
          <h5>{props.currentData.condition.text} | {props.forecastData.forecastday[0].day.mintemp_c}, {props.forecastData.forecastday[0].day.maxtemp_c}°C</h5>
        </div>
        <div className="card">
          <h5>{daysOfWeek[dates[1].getDay()]}</h5>
          <h6>{`${dates[1].getUTCDate()} ${months[dates[1].getUTCMonth()]}, ${dates[1].getUTCFullYear()}`}</h6>
          <img src={props.forecastData.forecastday[1].day.condition.icon} alt="" />
          <h1>{props.forecastData.forecastday[1].day.avgtemp_c}°C</h1>
          <h5>{props.forecastData.forecastday[1].day.condition.text} | {props.forecastData.forecastday[1].day.mintemp_c}, {props.forecastData.forecastday[1].day.maxtemp_c}°C</h5>
        </div>
        <div className="card">
          <h5>{daysOfWeek[dates[2].getDay()]}</h5>
          <h6>{`${dates[2].getUTCDate()} ${months[dates[2].getUTCMonth()]}, ${dates[2].getUTCFullYear()}`}</h6>
          <img src={props.forecastData.forecastday[2].day.condition.icon} alt="" />
          <h1>{props.forecastData.forecastday[2].day.avgtemp_c}°C</h1>
          <h5>{props.forecastData.forecastday[2].day.condition.text} | {props.forecastData.forecastday[2].day.mintemp_c}, {props.forecastData.forecastday[2].day.maxtemp_c}°C</h5>
        </div>
      </div>
    </div>
  );
};

export default Weather;
