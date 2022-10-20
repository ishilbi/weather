import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,

      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="overview">
            <div className="weather-title">
              Weather
              <img src="{image/weather.svg}" alt=""></img>
            </div>
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control search-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3 p-0">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>

          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3a66372ec0940e078d8212f937f2ff1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
