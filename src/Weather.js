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
                <li>{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind Speed: {weatherData.wind}km/hr</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <div className="float-right">
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
