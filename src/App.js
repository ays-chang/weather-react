import React from "react";
import SearchBar from "./SearchBar";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="weather-app">
        <SearchBar />
        <Weather defaultCity="Taipei" />
        <Forecast />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
