import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Navbar />
        <div className="backGround landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">myCrops</h1>
                <p className="lead">Monitore seu cultivo de qualquer lugar</p>
                <hr />
                <Link
                  style={{ margin: 5 }}
                  to="/login"
                  className="btn btn-lg btn-light"
                >
                  Login
                </Link>
                <Link
                  style={{ margin: 5 }}
                  to="/register"
                  className="btn btn-lg btn-info mr-2"
                >
                  Cadastro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
