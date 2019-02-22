import React, { Component } from "react";
import { connect } from "react-redux";

import CardComponent from "./CardComponent";

class IndexComponent extends Component {
  render() {
    const cardStack = this.props.cardData.map((data, i) => (
      <CardComponent key={data.id} card={data} />
    ));

    return <div>{cardStack}</div>;
  }
}

const mapStateToProps = state => ({
  cardData: state.cardData
});

export default connect(
  mapStateToProps,
  {}
)(IndexComponent);
