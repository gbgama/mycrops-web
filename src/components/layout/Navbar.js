import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    if (!this.props.isAuthorized) {
      return (
        <nav style={{backgroundColor: '#27AE60'}} className="navbar navbar-expand-sm navbar-dark mb-4">
          <div className="container">
            <Link className="myCropsLogo navbar-brand" to="/">
              myCrops
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    cadastro
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav style={{backgroundColor: '#27AE60'}} className="navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <Link className="myCropsLogo navbar-brand" to="/home">
              myCrops
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <span className="nav-link">{this.props.name}</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">{this.props.email}</span>
                </li>
                <li className="nav-item nav-exit">
                  <Link className="nav-link" to="/">
                    sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
