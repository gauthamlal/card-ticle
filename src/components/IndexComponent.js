import React, { Component } from "react";
import { connect } from "react-redux";

import CardComponent from "./CardComponent";
import checkCardPassesFilter from "../utils/checkCardPassesFilter";

class IndexComponent extends Component {
  render() {
    // console.log("inside IndexComp", this.props);
    const cardStack = [];
    for (let i = 0; i < this.props.cardSize; i++) {
      if (checkCardPassesFilter(i)) {
        cardStack.push(<CardComponent key={i} index={i} fromIndex={true} />);
      }
    }

    return <div className="index">{cardStack}</div>;
  }
}

const mapStateToProps = state => ({
  cardSize: state.card.cardData.size,
  visibilityFilter: state.visibilityFilter
});

export default connect(
  mapStateToProps,
  {}
)(IndexComponent);
