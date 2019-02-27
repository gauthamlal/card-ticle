import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HamburgerToggleComponent from "./HamburgerToggleComponent";
import visibilityFilterAction from "../actions/visibilityActions";
import hamburgerAction from "../actions/hamburgerAction";

import { SHOW_ALL } from "../actions/types";

class NavbarComponent extends Component {
  handleTitleClick = () => {
    if (this.props.currentFilter !== SHOW_ALL) {
      this.props.visibilityFilterAction(SHOW_ALL);
      if (this.props.isOpen) {
        this.props.hamburgerAction();
      }
    }
  };

  render() {
    return (
      <div className="navbar">
        <HamburgerToggleComponent />
        <h1>
          <Link
            to="/"
            className="navbar__title"
            onClick={this.handleTitleClick}
          >
            Card-Ticle
          </Link>
        </h1>
        <h2>Dummy</h2>
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
)(NavbarComponent);
