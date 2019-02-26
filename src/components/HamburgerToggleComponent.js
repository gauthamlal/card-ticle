import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/hamburgerToggle.css";
import hamburgerAction from "../actions/hamburgerAction";

class HamburgerToggleComponent extends Component {
  handleClick = e => {
    console.log(this.props);
    this.props.hamburgerAction();
  };

  render() {
    return (
      <div className="menu-wrapper" onClick={this.handleClick}>
        <div className="hamburger-menu" />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  hamburgerAction: () => dispatch(hamburgerAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerToggleComponent);
