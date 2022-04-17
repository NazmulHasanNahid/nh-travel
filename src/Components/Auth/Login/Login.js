import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form action="">
        <div className="login">
          <h1 className="title">Login</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-12">
                <input className="input-text" type="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-field col-lg-12">
                <input className="input-text" type="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-field col-lg-12">
                <input
                  className="login-btn"
                  type="submit"
                  name=""
                  value="Login"
                />
                <p className="my-3">New In NH Travel? <Link to="/register">Create Account</Link></p>
                
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
