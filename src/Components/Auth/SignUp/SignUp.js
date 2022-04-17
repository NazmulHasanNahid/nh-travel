import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <form>
        <div className="login">
          <h1 className="title">Create Account</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input className="input-text" type="text" name="name" />
                <label htmlFor="email">Name</label>
              </div>
              <div className="form-field col-lg-6">
                <input className="input-text" type="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-field col-lg-6">
                <input className="input-text" type="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-field col-lg-6">
                <input className="input-text" type="password" name="password" />
                <label htmlFor="password">Confirm Password</label>
              </div>
              <div className="form-field col-lg-12">
                <input
                  className="login-btn"
                  type="submit"
                  name=""
                  value="Sign Up"
                />
                <p className="my-3">Already Have An Account <Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
