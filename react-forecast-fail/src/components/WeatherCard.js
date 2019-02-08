import React from "react";
import PropTypes from "prop-types";
import sunny from "../assets/002-sun.png";
import cloudy from "../assets/004-cloud.png";
import partlySunny from "../assets/003-weather.png";
import rainy from "../assets/001-rain.png";
import snowy from "../assets/005-snowflake.png";

const setWeatherDetail = arr => {
  let name = arr.name;
  return arr.weather.map(weatherDetail => {
    return (
      <div key={weatherDetail.id} className="card">
        <p className="title"> {name} </p>
        <div className="card-image">
          {weatherDetail.icon === "10d" ? <img src={rainy} alt="" /> : ""}
        </div>
        <div className="card-content">
          <p>main: {weatherDetail.main}</p>
          <p>description: {weatherDetail.description}</p>
          <p>icon: {weatherDetail.icon}</p>
        </div>
        <button className="button is-large is-primary">Save To Your Locations</button>
      </div>
    );
  });
};
export default function WeatherCard(props) {
  console.log("weatherByZipCode", props.weatherByZipCode);
  return (
    <div>
      {Object.keys(props.weatherByZipCode).length > 0
        ? setWeatherDetail(props.weatherByZipCode)
        : ""}
    </div>
  );
}
