import React, { Component } from "react";
import { connect } from "react-redux";

import hamburgerAction from "../actions/hamburgerAction";

class NavbarComponent extends Component {
  handleClick = e => {
    console.log(this.props);
    this.props.hamburgerAction();
  };

  render() {
    return (
      <div className="navbar">
        <button onClick={this.handleClick}>Toggle</button>
        <h1>Card-Ticle</h1>
        <h2>Dummy</h2>
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
)(NavbarComponent);
