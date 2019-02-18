import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/layout/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  _authenticate = () => {
    this.setState({ isAuthenticated: true });
  };

  _signOut = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />          
          <Route path="/home" component={Home} />          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
