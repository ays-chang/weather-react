import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconURL: "http://openweathermap.org/img/wn/50d@2x.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="data">
        <div className="row">
          <h1>
            <span>{weatherData.city}</span>
          </h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li>
              <span className="text-capitalize">{weatherData.description}</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconURL}
              alt={weatherData.description}
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
