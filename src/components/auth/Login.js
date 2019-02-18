import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

import Navbar from "../layout/Navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    // history é necessario para mudar a pagina
    const { history } = this.props;

    axios
      .post("https://mycrops.herokuapp.com/api/users/login", user)
      .then(res => {
        // redirecionar para home se login for bem sucedido
        history.push("/home", res.data.token);
      })
      .catch(error => this.setState({ errors: error.response }));
  };

  render() {
    const { errors } = this.state;
    const { history } = this.props;

    return (
      <div className="login">
        <Navbar isAuthorized={false} />
        <div className="container formContainer">
          <div className="row loginInner">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">myCrops</h1>
              <p className="lead text-center">
                Monitore seu cultivo de qualquer lugar
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Senha"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                  value="login"
                />
              </form>
              <button
                onClick={() => history.push("/register")}
                className="btnCadastro btn btn-block mt-2"
              >
                cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
