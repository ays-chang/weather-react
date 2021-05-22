import React from "react";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="weather-app">
        <Search defaultCity="Coquitlam" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
