import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import visibilityFilterAction from "../actions/visibilityActions";
import hamburgerAction from "../actions/hamburgerAction";
import changeLayout from "../actions/layoutAction";

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

  handleLayoutChange = () => {
    this.props.hamburgerAction();
    this.props.changeLayout();
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
        <Link className="hamburger__link" to="/">
          <div onClick={() => this.handleFilterClick(SHOW_ALL)}>Home</div>
        </Link>
        <Link className="hamburger__link" to="/liked">
          <div onClick={() => this.handleFilterClick(SHOW_LIKED)}>Liked</div>
        </Link>
        <Link className="hamburger__link" to="/disliked">
          <div onClick={() => this.handleFilterClick(SHOW_DISLIKED)}>
            Disliked
          </div>
        </Link>
        <Link className="hamburger__link" to="/bookmarked">
          <div onClick={() => this.handleFilterClick(SHOW_BOOKMARKED)}>
            Bookmarked
          </div>
        </Link>
        <div className="hamburger__link">
          <div onClick={this.handleLayoutChange}>
            Change to: {!this.props.isList ? "List" : "Grid"}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.hamburger.isOpen,
  currentFilter: state.visibilityFilter,
  isList: state.isList
});

const mapDispatchToProps = dispatch => ({
  visibilityFilterAction: filter => dispatch(visibilityFilterAction(filter)),
  hamburgerAction: () => dispatch(hamburgerAction()),
  changeLayout: () => dispatch(changeLayout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerMenuComponent);
