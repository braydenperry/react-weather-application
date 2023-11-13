const WeatherCard = ({ date, condition, mainTemp, minTemp, maxTemp }) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });

  return (
    <div className="card">
      <h5>{daysOfWeek[date.getUTCDay()]}</h5>
      <h6>{formattedDate}</h6>
      <img src={condition.icon} alt="" />
      <h1>{mainTemp}°C</h1>
      <h5>{condition.text} | {minTemp}, {maxTemp}°C</h5>
    </div>
  );
};

export default WeatherCard;