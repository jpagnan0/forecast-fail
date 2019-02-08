import React, { Component } from "react";
class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }
  handleCitySubmit = () => {
    this.props.handleCitySubmit(this.state.zipcode);
    this.setState({
      city: ""
    });
  };

  handleCityUpdate = e => {
    let city = e.target.value;

    this.setState({
      city: city
    });
  };

  render() {
    return (
      <div className="container is-fullwidth">
        <div className="field">
          <p className="title label" />
          <div className="control">
            <input
              className="input"
              onChange={this.handleCityUpdate}
              type="text"
              value={this.state.city}
            />
          </div>
        </div>
        <div className="field">
          <button
            className="button is-large is-primary"
            onClick={this.handleCitySubmit}
            onSubmit={this.handleCitySubmit}
          >
            Get Weather!
          </button>
        </div>
      </div>
    );
  }
}
export default City;
