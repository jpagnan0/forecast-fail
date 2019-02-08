import React, { Component } from 'react';


export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>Home</div>
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
