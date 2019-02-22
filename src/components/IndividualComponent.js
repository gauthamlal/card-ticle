import React, { Component } from "react";

export default class IndividualComponent extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>This is where I'll be showing Indiviual Components!</h1>
      </div>
    );
  }
}
