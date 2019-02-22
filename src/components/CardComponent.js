import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/card.css";

class CardComponent extends Component {
  render() {
    const data = this.props.card;
    return (
      <div className="card">
        <h2>{data.title}</h2>
        <article>
          <p>{data.description}</p>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardData[ownProps.index]
});

export default connect(
  mapStateToProps,
  {}
)(CardComponent);
