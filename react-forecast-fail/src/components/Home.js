import React, { Component } from "react";
import {Link} from 'react-router-dom'
// RAILSAPI = 'http://localhost:3000/api/v1/users/'

export default class Home extends Component {
  // we need an input filed to create a new user.
  // this is where we will post that user to the backend.
  // state will capture the user input.
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: "",
      currentUser: null
    };
  }

  postApiCreateUser = event => {
    console.log("state", this.state.usernameInput);
    event.preventDefault();
    fetch(`http://localhost:9000/api/v1/users/${this.state.usernameInput}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.usernameInput
      })
    }).then(res => res.json())
    .then(response => {
      console.log(response)
      this.setState({
        currentUser: response.username || null
      },() => console.log(this.state))
      // console.log('Error:', response)
    })
    // debugger
    document.querySelector("#userForm").reset();
  };

  handleChangeUsername = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    console.log('whats up');
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <div className="column is-6-tablet is-12-desktop is-12-widescreen">
                  <form className="box" id="userForm" onSubmit={this.postApiCreateUser}>
                    <div className="field">
                    <h1>Forecast Fail</h1>
                    <h2>The Weather App that is always wrong because the weather forecast is always wrong.</h2>
                    <h4>Only as reliable as your next promise</h4>
                      <label htmlFor="username">User Name: </label>
                      <input
                        className="input"
                        onChange={this.handleChangeUsername}
                        id="usernameInput"
                        type="text"
                        name="name"
                      />
                      <button className="button is-success" type="submit" value="Log In"><Link to="/search">Log in</Link></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // <Router>
  //   <div className="App">
  //
  //     <nav>
  //       <NavLink exact to="/" activeClassName="selected">Home</NavLink>
  //     </nav>
  //     <Route exact path="/" render={() => <Home />}/>
  //
  //   </div>
  // </Router>
}
