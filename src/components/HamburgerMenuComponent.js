import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import visibilityFilterAction from "../actions/visibilityActions";
import hamburgerAction from "../actions/hamburgerAction";

import {
  SHOW_ALL,
  SHOW_LIKED,
  SHOW_DISLIKED,
  SHOW_BOOKMARKED
} from "../actions/types";

class HamburgerMenuComponent extends Component {
  handleFilterClick = filter => {
    if (filter !== this.props.currentFilter) {
      this.props.visibilityFilterAction(filter);
      this.props.hamburgerAction();
    }
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
        <Link to="/">
          <div className="hamburger__menu" onClick={() => this.handleFilterClick(SHOW_ALL)}>Home</div>
        </Link>
        <br />
        <Link className="hamburger__menu" to="/liked">
          <div onClick={() => this.handleFilterClick(SHOW_LIKED)}>Liked</div>
        </Link>
        <br />
        <Link className="hamburger__menu" to="/disliked">
          <div onClick={() => this.handleFilterClick(SHOW_DISLIKED)}>
            Disliked
          </div>
        </Link>
        <br />
        <Link to="/bookmarked">
          <h3 onClick={() => this.handleFilterClick(SHOW_BOOKMARKED)}>
            Bookmarked
          </h3>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.hamburger.isOpen,
  currentFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  visibilityFilterAction: filter => dispatch(visibilityFilterAction(filter)),
  hamburgerAction: () => dispatch(hamburgerAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerMenuComponent);
