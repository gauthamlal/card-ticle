import React, { Component } from "react";

import IndexComponent from "./components/IndexComponent";
// import CardComponent from "./components/CardComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Card-Ticle</h1>
        <IndexComponent />
      </div>
    );
  }
}

export default App;
