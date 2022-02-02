/* import "../../assets/styles/customstyles/forecast.scss";

export default function Weather() {
  return (
    <div className="mx-auto flex justify-center">
      <div id="info" className="text-white">
        <h1 className="my-8 text-4xl animate__animated animate__fadeIn">
          <span className="capitalize">{search}</span>&nbsp;
          <span className="uppercase">
            <sup>{city.sys.country}</sup>
          </span>
        </h1>
        <p className="mt-8 mb-4 text-center text-3xl animate__animated animate__fadeIn">
          {Math.round(city.main.temp)}&deg;C
        </p>
        <p className="text-center text-lg animate__animated animate__fadeIn">
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
  );
}
 */