import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="weather-data">
      <div className="row">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>
            <span className="text-capitalize">{props.data.description}</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconURL}
            alt={props.data.description}
            className="weather-icon"
          />
          <Temperature metric={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
