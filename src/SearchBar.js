import React from "react";
import Logo from "./images/weather-logo.png";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form className="row row-cols-auto g-1 align-items-end">
        <div className="col logo">
          <img src={Logo} alt="weather-logo" width="100px" />
        </div>
        <div className="col-6">
          <input
            type="search"
            className="form-control form-control-lg"
            placeholder="Search location"
          />
        </div>
        <div className="col">
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
          <button type="submit">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
