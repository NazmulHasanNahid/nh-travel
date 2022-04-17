import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";


const Login = () => {
     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useSignInWithEmailAndPassword(auth);
        const [userInfo , setUserInfo] = useState({
          name: "" ,
          email: "" ,
          password:"" ,
     })
     const [errors ,  setErrors] = useState({
          email:"" ,
          password:"",
     })
        const handleEmail = (e) =>{
          const emailRegex = /\S+@\S+\.\S+/
          const validEmail =   emailRegex.test(e.target.value)
          if(validEmail){
      
            setUserInfo({...userInfo , email: e.target.value})
            setErrors({...errors , email:''})
          }else{
            setErrors({...errors , email:'Invalid Email'})
          }
     }

     const handlePassword = (e) =>{
          const passwordRegex = /.{6}/;
          const validPassword = passwordRegex.test(e.target.value)
          if(validPassword){
        
           setUserInfo({...userInfo , password:e.target.value})
           setErrors({...errors , password:''})
          }else{
            setErrors({...errors , password:'Password Must Be  contain 6 characters'})
          }
        }
        const handleCreateAccount = (e) =>{
          e.preventDefault()
          signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
  return (
    <div>
      <form onSubmit={handleCreateAccount}>
        <div className="login">
          <h1 className="title">Login</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-12">
                <input onChange={handleEmail} className="input-text" type="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-field col-lg-12">
                <input onChange={handlePassword} className="input-text" type="password" name="password" />
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
