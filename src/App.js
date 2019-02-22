import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import IndexComponent from "./components/IndexComponent";
// import CardComponent from "./components/CardComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Card-Ticle</h1>
          <IndexComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
