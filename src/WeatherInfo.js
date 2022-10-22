import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
                <span>
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>

                <div className="float-right">
                  {" "}
                  <WeatherIcon code={props.data.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
