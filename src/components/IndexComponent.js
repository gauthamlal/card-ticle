import React, { Component } from "react";
import { connect } from "react-redux";

import CardComponent from "./CardComponent";

class IndexComponent extends Component {
  render() {
    // const cardStack = this.props.cardData.map((data, i) => (
    //   <CardComponent key={data.id} card={data} />
    // ));
    const cardStack = [];
    for (let i = 0; i < this.props.cardSize; i++) {
      cardStack.push(<CardComponent key={i} index={i} />);
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
