import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/hamburgerToggle.css";
import hamburgerAction from "../actions/hamburgerAction";

class HamburgerToggleComponent extends Component {
  handleClick = e => {
    this.props.hamburgerAction();
  };

  render() {
    const classForHamburger = this.props.isOpen
      ? "hamburger-menu animate"
      : "hamburger-menu";
    return (
      <div className="menu-wrapper" onClick={this.handleClick}>
        <div className={classForHamburger} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.hamburger.isOpen
});

const mapDispatchToProps = dispatch => ({
  hamburgerAction: () => dispatch(hamburgerAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerToggleComponent);
