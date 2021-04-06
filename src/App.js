import SearchBar from "./SearchBar";
import Data from "./Data";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="weather-app">
        <SearchBar />
        <Data />
        <Forecast />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
