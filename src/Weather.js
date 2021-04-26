import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="data">
        <div className="row">
          <h1>
            <span>{weatherData.city}</span>
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
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
          <div className="col-6">
            <ul className="details">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3cac463b3ab814b10debb07d348f5595";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
