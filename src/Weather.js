import React, { useState } from "react";
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
      date: "Mon Oct 17, 2022 15:46pm",
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
          </div>

          <div className="weather-info">
            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <h2>{weatherData.date}</h2>
                <ul>
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>Temp min: {Math.round(weatherData.tempMin)}°C</li>
                  <li>Temp max: {Math.round(weatherData.tempMax)}°C</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/hr</li>
                </ul>
              </div>
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <div className="float-right">
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">
                      <a href="/">°C</a> | <a href="/">°F</a>
                    </span>
                  </div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                    alt="sunnycloudy"
                  ></img>{" "}
                </div>
              </div>
            </div>
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
