import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Seoul",
    temperature: 30,
    date: "Wednesday 14, 2022; 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="weather-app">
      <div className="overview">
        <div className="weather-title">Weather</div>
        <form>
          <div className="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control search-input"
                autoComplete="off"
              />
            </div>
            <div class="col-3 p-0">
              <input
                type="submit"
                class="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="weather-info">
        <div class="row">
          <div class="col-6">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {weatherData.wind}km/hr</li>
            </ul>
          </div>
          <div class="col-6">
            <div class="clearfix weather-temperature">
              <div class="float-right">
                <span class="temperature">{weatherData.temperature}</span>
                <span class="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                class="float-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="weather-forecast"></div>
    </div>
  );
}
