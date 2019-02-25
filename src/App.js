import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import IndexComponent from "./components/IndexComponent";
import IndividualComponent from "./components/IndividualComponent";
import NavbarComponent from "./components/NavbarComponent";
import HamburgerMenuComponent from "./components/HamburgerMenuComponent";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <div className="App">
              <NavbarComponent />
              <HamburgerMenuComponent />
              <div className="container">
                {["/", "/liked", "/disliked", "/bookmarked"].map(
                  (path, index) => (
                    <Route
                      exact
                      path={path}
                      key={index}
                      component={IndexComponent}
                    />
                  )
                )}
                <Route
                  exact
                  path="/story/:storyId"
                  component={IndividualComponent}
                />
              </div>
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
