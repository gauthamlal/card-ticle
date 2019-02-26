import React, { Component } from "react";
import { Link } from "react-router-dom";

import HamburgerToggleComponent from "./HamburgerToggleComponent";

class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <HamburgerToggleComponent />
        <h1>
          <Link to="/" className="navbar__title">
            Card-Ticle
          </Link>
        </h1>
        <h2>Dummy</h2>
      </div>
    );
  }
}

export default NavbarComponent;
