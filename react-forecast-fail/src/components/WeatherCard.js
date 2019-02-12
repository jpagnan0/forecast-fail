import React from "react";
import PropTypes from "prop-types";
import sunny from "../assets/002-sun.png";
import cloudy from "../assets/004-cloud.png";
import partlySunny from "../assets/003-weather.png";
import rainy from "../assets/001-rain.png";
import snowy from "../assets/005-snowflake.png";


const tempConverter = (k) => { return (k*(9/5) - 459.67) }

const setWeatherIcon = (icon) => {
  switch (icon) {
    case "10d":
      return (<img className="image is-128x128" src={rainy} alt="" />);
    case "50d":
      return (<img className="image is-128x128" src={cloudy} alt="" />);
    case "01n":
      return (<img className="image is-128x128" src={sunny} alt="" />);
    case "13d":
      return (<img className="image is-128x128" src={snowy} alt="" />);
    default:
      return ""
  }
}
const setWeatherDetail = weatherObj => {

  let name=weatherObj.name;
  let temp=tempConverter(weatherObj.main.temp)
  return weatherObj.weather.map(weatherDetail => {
    return (
      <div key={weatherDetail.id} className="card">
        <div className="card-header">
          <p className="title"> {name} </p>
        </div>

        <div className="card-image">
          {setWeatherIcon(weatherDetail.icon)}
        </div>

        <div className="card-content">
          <p>main: {weatherDetail.main}</p>
          <p>description: {weatherDetail.description}</p>
          <p>temp: {temp.toPrecision(2)}</p>
        </div>

        <div className="card-footer">
          <button className="button is-large is-primary">
            Save To Your Locations
          </button>
        </div>
      </div>
        );
  });
};
export default function WeatherCard(props) {
  console.log("weatherByZipCode", props.weatherByZipCode);
  return (
    <div className="columns is-multiline">
      <div className="column is-flex-tablet is-flex-desktop is-flex-fullhd">
        {Object.keys(props.weatherByZipCode).length > 0
          ? setWeatherDetail(props.weatherByZipCode)
          : ""}
      </div>
    </div>
  );
}
