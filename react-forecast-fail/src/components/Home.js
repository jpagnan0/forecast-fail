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
      listOfusers: []
    };
  }

  postApiCreateUser = event => {
    console.log("state", this.state.usernameInput);
    event.preventDefault();
    fetch("http://localhost:4000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.usernameInput
      })
    }).then(console.log);
    // debugger
    document.querySelector("#userForm").reset();
  };

  // componentDidMount() {
  //   this.postFetchUserApi()
  // }

  handleChangeUsername = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <div className="column is-6-tablet is-12-desktop is-12-widescreen">
                  <form className="box" id="userForm" onSubmit={this.postApiCreateUser}>
                    <div className="field">
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
