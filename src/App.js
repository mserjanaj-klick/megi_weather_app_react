import React from "react";
import Forecast from "../src/components/weather/Forecast";
import Footer from "../src/components/global/Footer";
// import MainNavigation from "./components/layout/MainNavigation";

function App() {

  return (
    <div className="app">
      {/* <MainNavigation /> */}
      {/* <Routes>
        <Route path="/" element={Home}>Home</Route>
        <Route path="/weather" element={Weather}>Weather</Route>
      </Routes> */}
      {/* <div>
        {weather.map((forecast) => (
          <div key={forecast.name}></div>
        ))}
      </div> */}
      <Forecast/>
    </div>
  );
}

export default App;

// api.openweathermap.org/data/2.5/weather?units=metric&q=Tirana&appid=279e23feb5d5ba66db977ea5a476b051
