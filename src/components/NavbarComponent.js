import React, { Component } from "react";

import HamburgerToggleComponent from "./HamburgerToggleComponent";

class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <HamburgerToggleComponent />
        {/* <button onClick={this.handleClick}>Toggle</button> */}
        <h1>Card-Ticle</h1>
        <h2>Dummy</h2>
      </div>
    );
  }
}

export default NavbarComponent;
