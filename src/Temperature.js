import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function imperial() {
    return (props.metric * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div>
        <span className="temperature">{Math.round(props.metric)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(imperial())}</span>
        <span className="units">
          <a href="/" onClick={showMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
