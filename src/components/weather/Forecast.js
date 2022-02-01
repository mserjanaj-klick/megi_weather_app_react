import axios from "axios";
import { useState, useEffect } from "react";

export default function Forecast() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(async () => {
    const result = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2bd3f9f0b9eea7c0aa1803544a2168a&units=metric`
    );
    setCity(result.data);
  }, [search]);

  return (
    <div className="weather">
      <div className="mx-auto my-0 w-5/12 h-[60rem] opacity-80">
        <div className="">
          <input
            className="mx-auto my-0 border-4"
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data found!</p>
        ) : (
          <div>
            <div className="">
              <h1>
                <span>{search}</span>
                <span>
                  <sup>{city.sys.country}</sup>
                </span>
              </h1>
              <h2>Temperature&nbsp;{Math.round(city.main.temp)}&deg;C</h2>
              <p>Feels like&nbsp;{Math.round(city.main.feels_like)}&deg;C</p>
              <p>Wind speed&nbsp;{city.wind.speed}</p>
              <p>Humidity&nbsp;{city.main.humidity}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
