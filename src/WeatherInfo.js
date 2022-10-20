import React from "react";
import WeatherIcon from "./WeatherIcon";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Temp min: {Math.round(props.data.tempMin)}°C</li>
              <li>Temp max: {Math.round(props.data.tempMax)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/hr</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-right">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
              <div className="float-right">
                <WeatherIcon code={props.data.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
