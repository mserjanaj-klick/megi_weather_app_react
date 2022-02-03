import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import "../../assets/styles/customstyles/forecast.scss";
// import Search from "./Search";
// import Weather from "./Weather";

export default function Forecast() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);

  /* const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2bd3f9f0b9eea7c0aa1803544a2168a&units=metric`
      )
      .then((res) => {
        const response = res.data;
        setCity(response);
      });
  };

  useEffect(() => {
    getWeather();
  }, [search]);  */

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2bd3f9f0b9eea7c0aa1803544a2168a&units=metric`
      )
      .then((res) => {
        setCity(res.data);
      });
  });

  return (
    <div className="forecast animate__animated animate__fadeInDown">
      <div
        id="forecast-card"
        className="mx-auto my-8 w-[90%] md:w-[40%] lg:w-3/12 h-[40rem] lg:h-[50rem] rounded-2xl"
      >
        <div className="flex justify-center">
          <input
            className="mx-auto mt-8 mb-2 p-[0.5rem] w-48 md:w-64 text-lg text-white capitalize bg-transparent"
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="text-center text-white">
            <span>No data found!</span>
            <br />
            <span>Please enter your city.</span>
          </p>
        ) : (
          <div className="mx-auto flex justify-center">
            <div id="info" className="text-white">
              <p>Day:&nbsp;{moment().format("dddd")}</p>
              <p>Date:&nbsp;{moment().format("LL")}</p>
              <h1 className="my-8 text-4xl animate__animated animate__fadeIn">
                <span className="capitalize">{search}</span>&nbsp;
                <span className="uppercase">
                  <sup>{city.sys.country}</sup>
                </span>
              </h1>
              <img src={city.weather[0].icon} alt="weather icon" />
              <p className="mt-8 mb-4 text-center text-3xl animate__animated animate__fadeIn">
                {Math.round(city.main.temp)}&deg;C
              </p>
              <p className="text-center text-lg animate__animated animate__zoomIn">
                {city.weather[0].description}
              </p>
              <p className="animate__animated animate__fadeIn">
                Feels like&nbsp;{Math.round(city.main.feels_like)}&deg;C
              </p>
              <p className="animate__animated animate__fadeIn">
                Wind speed&nbsp;{city.wind.speed}
              </p>
              <p className="animate__animated animate__fadeIn">
                Humidity&nbsp;{city.main.humidity}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
