import React, { Component } from 'react';

// RAILSAPI = 'http://localhost:3000/api/v1/users/'

export default class Home extends Component {
  // we need an input filed to create a new user.
  // this is where we will post that user to the backend.
  // state will capture the user input.
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: '',
      listOfusers: []
    }
  }

  postApiCreateUser = (event) => {
    console.log('state', this.state.usernameInput);
    event.preventDefault()
    // fetch(RAILSAPI, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: event.target.value
    //   })
    // }).then(console.log)
  }

  // componentDidMount() {
  //   this.postFetchUserApi()
  // }

  handleChangeUsername = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <div>Home</div>
        <form onSubmit={this.postApiCreateUser}>
          <label htmlFor="username">User Name: </label>
          <input onChange={this.handleChangeUsername} id="usernameInput" type="text" name="name"/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
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
