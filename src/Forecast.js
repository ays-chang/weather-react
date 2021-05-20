import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
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
