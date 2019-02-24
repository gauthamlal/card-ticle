import React, { Component } from "react";
import { connect } from "react-redux";

import { visibilityFilterAction } from "../actions/visibilityActions";
import {
  SHOW_ALL,
  SHOW_LIKED,
  SHOW_DISLIKED,
  SHOW_BOOKMARKED
} from "../actions/types";

class HamburgerMenuComponent extends Component {
  handleFilterClick = filter => {
    this.props.visibilityFilterAction(filter);
  };

  render() {
    return (
      <div
        className="hamburger"
        style={{
          transform: this.props.isOpen
            ? "translate(0, 0)"
            : "translate(-100%, 0)"
        }}
      >
        <h3 onClick={() => this.handleFilterClick(SHOW_ALL)}>Home</h3>
        <br />
        <h3 onClick={() => this.handleFilterClick(SHOW_LIKED)}>Liked</h3>
        <br />
        <h3 onClick={() => this.handleFilterClick(SHOW_DISLIKED)}>Disliked</h3>
        <br />
        <h3 onClick={() => this.handleFilterClick(SHOW_BOOKMARKED)}>
          Bookmarked
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.hamburger.isOpen
});

const mapDispatchToProps = dispatch => ({
  visibilityFilterAction: filter => dispatch(visibilityFilterAction(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerMenuComponent);
