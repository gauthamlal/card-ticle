import React, { Component } from "react";

import CardComponent from "./CardComponent";

export default class IndividualComponent extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>This is where I'll be showing Indiviual Components!</h1>
        <CardComponent
          index={Number(this.props.match.params.storyId)}
          fromIndex={false}
        />
      </div>
    );
  }
}
