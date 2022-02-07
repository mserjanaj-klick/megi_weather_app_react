import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import "../../assets/styles/customstyles/forecast.scss";
import Accordion from "../Accordion";

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
    <div className="forecast">
      <div
        id="forecast-card"
        className="animate__animated animate__fadeInDown mx-auto my-8 w-[90%] md:w-[40%] lg:w-3/12 h-[40rem] lg:h-[45rem] rounded-3xl shadow-2xl"
      >
        <div className="flex justify-center">
          <input
            className="mx-auto mt-8 md:mt-16 mb-2 md:mb-4 p-[0.8rem] w-48 md:w-64 text-lg text-white capitalize bg-transparent rounded-xl"
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="mx-auto my-2 text-center text-white">
            <span>No data found!</span>
            <br />
            <span>Please enter your city.</span>
          </p>
        ) : (
          <div className="mx-auto flex justify-center">
            <div id="info" className="text-white">
              <p className="text-center text-sm italic animate__animated animate__fadeIn">
                {moment().format("dddd")},&nbsp;{moment().format("LL")}
              </p>
              <h1 className="my-4 md:my-8 text-2xl md:text-4xl animate__animated animate__fadeIn">
                <span className="capitalize">{search}</span>&nbsp;
                <span className="uppercase">
                  <sup>{city.sys.country}</sup>
                </span>
              </h1>
              <img
                src={city.weather[0].icon}
                alt="weather icon"
                className="animate__animated animate__fadeIn"
              />
              <p className="mt-4 md:mt-8 mb-2 md:mb-4 text-center text-2xl md:text-3xl animate__animated animate__fadeIn">
                {Math.round(city.main.temp)}&deg;C
              </p>
              <p className="text-center text-md md:text-lg animate__animated animate__zoomIn">
                {city.weather[0].description}
              </p>
              <div className="flex justify-center">
                <Accordion
                  title="More"
                  feelsLike={city.main.feels_like}
                  sunrise={city.sys.sunrise}
                  sunset={city.sys.sunset}
                  windSpeed={city.wind.speed}
                  humidity={city.main.humidity}
                />
              </div>
            </div>
          </div>
        )}{" "}
        <div className="flex justify-center">
          <p className="absolute bottom-8 text-white text-xs">
            &copy;Megi Serjanaj ~ February 2022.
          </p>
        </div>
      </div>
    </div>
  );
}
