import React from "react";
import MainNavigation from "./components/layout/MainNavigation";
import Forecast from "../src/components/weather/Forecast";

function App() {
  return (
    <div className="app">
      {/* <MainNavigation /> */}
      <Forecast />
    </div>
  );
}

export default App;

// api.openweathermap.org/data/2.5/weather?units=metric&q=Tirana&appid=279e23feb5d5ba66db977ea5a476b051

//background-image: linear-gradient(to bottom right, );