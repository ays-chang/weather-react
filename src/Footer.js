import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/ays-chang/weather-react"
        rel="noreferrer"
        target="_blank"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a href="https://creativealice.com" rel="noreferrer" target="_blank">
        Alice Chang
      </a>
    </div>
  );
}
