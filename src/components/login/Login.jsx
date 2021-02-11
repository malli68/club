import React from "react";
import reactDom from "react-dom";
import "../login/login.css";
import { useHistory } from "react-router-dom";
import config from "../../config";
import { removeSession } from "../helpers/globalHelpers/GlobalHelperFunctions";
import {
  setCacheObject,
  getCacheObject,
} from "../helpers/globalHelpers/GlobalHelperFunctions";
import { connect } from "react-redux";
import {
  login,
  errorlogin,
  setdata,
  resetlogin,
} from "../redux/actions/LoginActions";
import { URL } from "../helpers/Constants";
import { validateEmail } from "../helpers/globalHelpers/Utils";

const SESSION_KEY_NAME = config.SESSION_KEY_NAME;

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    //  this.props.resetlogin();
    this.state = {
      login: false,
      password: "",

      error: false,
    };
  }
  componentDidMount() {
    removeSession();
    let isLoggedIn = localStorage.getItem("auth");
    this.setState({ login: isLoggedIn });
    // this.refs["email"].focus();
  }

  login() {
    const { email } = this.props;
    if (email == "" || this.state.password == "") {
      this.props.onErrorLogin("Please Enter email and Password");
      return false;
    }

    console.log("hiii>>>>", email, this.state.password);
    let dataObject = {
      username: email,
      password: this.state.password,
    };
    this.props.onUserLogin(dataObject);
  }

  handleEnterKey = (e) => {
    if (e.keyCode == 13 && e.target.name == "password") {
      this.login();
    }
  };

  handleChange = (e) => {
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "email") {
      this.props.setdata(data);
    } else if (e.target.name == "password") {
      this.setState({ password: e.target.value });
    }
  };

  render() {
    const { loading, isUserLogIn, error, email } = this.props;

    const { password } = this.state.password;
    return (
      <div>
        {/*  <!-- login page --> */}
        <div className="login-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                  <div className="bg-login text-center">
                    <div className="bg-login-overlay"></div>
                    <div className="position-relative">
                      <h5 className="text-white font-size-20">
                        Welcome Back !
                      </h5>
                      <p className="text-white-50 mb-0">
                        Sign in to continue to ClubRummy.
                      </p>
                      <a href="index.html" className="logo logo-admin mt-4">
                        <img
                          src="assets/images/logo-sm-dark.png"
                          alt=""
                          height="30"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="card-body pt-5">
                    <div className="p-2">
                      <div className="form-group">
                        <label for="email">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Enter email"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="userpassword">Password</label>
                        <input
                          type="password"
                          value={password}
                          name="password"
                          className="form-control"
                          type="password"
                          id="userpassword"
                          placeholder="Enter password"
                          onKeyDown={this.handleEnterKey}
                          onChange={this.handleChange}
                        />
                      </div>
                      {/*     {error.length > 0 ? <p className="text-danger">{error}</p> : null} */}
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                          onClick={() => this.login()}
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <a href="pages-recoverpw.html" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i> Forgot your
                          password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p>
                    Don't have an account ?{" "}
                    <a
                      href="pages-register.html"
                      className="font-weight-medium text-primary"
                    >
                      {" "}
                      Signup now{" "}
                    </a>{" "}
                  </p>
                  <p>
                    © 2020 Qovex. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    // check whether client has changed

    if (prevProps.isUserLogIn !== this.props.isUserLogIn) {
      if (this.props.isUserLogIn) {
        console.log(this.props.user);
         setCacheObject(SESSION_KEY_NAME, this.props.user);
        this.props.history.push(URL.NAV_HOME);
      }
    }
  }
}
const mapStateToProps = (state) => {
  const { error, loading, user, isUserLogIn, email } = state.auth;
  console.log("email>>>>", isUserLogIn);
  return {
    error,
    loading,
    user,
    isUserLogIn,
    email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (user) => {
      dispatch(login(user));
    },
    onErrorLogin: (user) => {
      dispatch(errorlogin(user));
    },
    setdata: (user) => {
      dispatch(setdata(user));
    },
    resetlogin: () => {
      dispatch(resetlogin());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
