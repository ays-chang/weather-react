import "./Data.css";

export default function Data() {
  return (
    <div className="data">
      <div className="row">
        <h1>
          <span>Vancouver</span>
        </h1>
        <ul>
          <li>
            <span>5:00pm</span>
          </li>
          <li>
            <span>Sunny</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/50d@2x.png"
            alt="weather"
            className="weather-icon"
          />
          <span className="temperature">10</span>
          <span className="units">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Humidity: 35%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
