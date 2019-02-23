import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import IndexComponent from "./components/IndexComponent";
import IndividualComponent from "./components/IndividualComponent";
import NavbarComponent from "./components/NavbarComponent";
import HamburgerMenuComponent from "./components/HamburgerMenuComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavbarComponent />
            {/* {store.getState().hamburger.isOpen && <HamburgerMenuComponent />} */}
            <HamburgerMenuComponent />
            <div className="container">
              <Route exact path="/" component={IndexComponent} />
              <Route path="/story/:storyId" component={IndividualComponent} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
