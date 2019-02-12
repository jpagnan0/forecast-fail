import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
// import Home from './components/Home'
import ZipCode from "./components/ZipCode";
import WeatherCard from "./components/WeatherCard";
import Home from "./components/Home";

const OpenWeatherMapHelper = require("openweathermap-node");

let APIKEY = "ed4d2c1099d8312f09709e182a9f0e3d";
//
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//
// let URL = `https://api.openweathermap.org/data/2.5/`;
//const DEFAULT_QUERY = `10128`;
const helper = new OpenWeatherMapHelper({ APPID: APIKEY, units: "imperial" });

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: "",
      weatherByZipCode: {}
    };
  }

  handleZipcodeSubmit = e => {
    e.preventDefault();
    // this.props.handleZipcodeSubmit(this.state.zipcode);
    let weatherData = this.setWeatherQuery(this.state.zipcode);

    this.setState({ zipcode: "" });
    console.log(this.state);
  };

  handleZipcodeUpdate = e => {
    // e.preventDefault()
    let zip = e.target.value;
    this.setState({ zipcode: zip });
  };

  componentDidMount() {
    this.setWeatherQuery = q => {
      helper.getCurrentWeatherByZipCode(q, (err, weatherByZipCode) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            weatherByZipCode: {
              ...weatherByZipCode
            }
          });
        }
      });
    };
    // this.setState({
    //   weather: this.setWeatherQuery(this.state.zipcode) ,
    // });
    // fetch(this.state.url)
    // .then(res => res.json())
    // .then(result => console.log(result))
    // this.setWeatherUrl(this.state.zipcode)
  }

  render() {
    // console.log(this.state.url)
    // this.setWeatherUrl(this.state.zipcode)
    return (
      //   <div className="App">
      //

      //
      //   </div>
      // </Router>
      //
      <Router>
        <div className="container is-fullwidth">
          <nav className="navbar-menu">
            <NavLink exact to="/" className="nav-link" activeClassName="selected">
              Home
            </NavLink>
            <NavLink exact to="/search" className="nav-link" activeClassName="selected">
              Search
            </NavLink>
          </nav>
          <Route exact path="/" render={() => <Home />} />
          <section className="section">
            <Route
              exact
              path="/search"
              render={() => (
                <ZipCode
                  zipcode={this.state.zipcode}
                  handleZipcodeUpdate={this.handleZipcodeUpdate}
                  handleZipcodeSubmit={this.handleZipcodeSubmit}
                />
              )}
            />
          </section>
          <section className="section">
            <WeatherCard weatherByZipCode={this.state.weatherByZipCode} />
          </section>
        </div>
      </Router>
    );
  }
}
