import React from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3cac463b3ab814b10debb07d348f5595";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="description"
              width="50px"
            />
          </div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>
            <span className="Forecast-temp-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
