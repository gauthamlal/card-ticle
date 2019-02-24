import React, { Component } from "react";
import { connect } from "react-redux";

class HamburgerMenuComponent extends Component {
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
        <h3>Liked</h3>
        <br />
        <h3>Disliked</h3>
        <br />
        <h3>Bookmarked</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.hamburger.isOpen
});

// const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  {}
)(HamburgerMenuComponent);
