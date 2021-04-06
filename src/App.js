import React from "react";
import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from App.js in weather-react (Dropbox)</h1>
        <Weather city="Hawaii" />
      </header>
    </div>
  );
}

export default App;
