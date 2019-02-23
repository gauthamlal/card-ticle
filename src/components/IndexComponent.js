import React, { Component } from "react";
import { connect } from "react-redux";

import CardComponent from "./CardComponent";

class IndexComponent extends Component {
  render() {
    const cardStack = [];
    for (let i = 0; i < this.props.cardSize; i++) {
      cardStack.push(<CardComponent key={i} index={i} fromIndex={true} />);
    }

    return <div>{cardStack}</div>;
  }
}

const mapStateToProps = state => ({
  cardSize: state.cardData.length
});

export default connect(
  mapStateToProps,
  {}
)(IndexComponent);
