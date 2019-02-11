import React from "react";
const ZipCode = (props) => {
  //
  // handleZipcodeSubmit = () => {
  //   this.props.onSubmitZipcode(this.state.zipcode);
  //   this.setState({
  //     zipcode: ""
  //   });
  // };
  //
  // handleZipcodeUpdate = e => {
  //   let zip = e.target.value;
  //
  //   this.setState({
  //     zipcode: zip
  //   });
  // };

  return (
    <div className="column">
      <div className="field">
        <p className="title label">Zipcode</p>
        <div className="control">
          <input className="input" onChange={props.handleZipcodeUpdate} type="text" value={props.zipcode}/>
        </div>
      </div>
      <div className="field">
        <button className="button is-large is-primary" onClick={props.handleZipcodeSubmit} onSubmit={props.handleZipcodeSubmit}>
          Get Weather!
        </button>
      </div>
    </div>
);
}

export default ZipCode;
