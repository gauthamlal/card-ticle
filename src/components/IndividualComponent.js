import React, { Component } from "react";

import CardComponent from "./CardComponent";

export default class IndividualComponent extends Component {
  render() {
    return (
      <div className="individual">
        <CardComponent
          index={Number(this.props.match.params.storyId)}
          fromIndex={false}
        />
      </div>
    );
  }
}
