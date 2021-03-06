import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

import Logo from "./images/weather-logo.png";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "3cac463b3ab814b10debb07d348f5595";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    let apiKey = "3cac463b3ab814b10debb07d348f5595";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="search-bar">
        <form
          onSubmit={handleSubmit}
          className="row row-cols-auto g-1 align-items-end"
        >
          <div className="col-3 logo">
            <img src={Logo} alt="weather-logo" width="100px" />
          </div>
          <div className="col-6">
            <input
              type="search"
              className="form-control form-control-lg"
              placeholder="Search location"
              onChange={handleCityChange}
            />
          </div>
          <div className="col">
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
            <button type="button" onClick={getCurrentPosition}>
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
        <Weather data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
