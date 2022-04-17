import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";





const SignUp = () => {
     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useCreateUserWithEmailAndPassword(auth);

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
          createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
  return (
    <div>
      <form onSubmit={handleCreateAccount}>
        <div className="login">
          <h1 className="title">Create Account</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input className="input-text" type="text" name="name" />
                <label htmlFor="email">Name</label>
              </div>
              <div className="form-field col-lg-6">
                <input onChange={handleEmail} className="input-text" type="email" name="email" />
                <label htmlFor="email">Email</label>
                {errors?.email && <p className="text-danger my-3 fw-bold">{errors?.email}</p>}
              </div>
              <div className="form-field col-lg-6">
                <input onChange={handlePassword} className="input-text" type="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-field col-lg-6">
                <input className="input-text" type="password" name="password" />
                <label htmlFor="password">Confirm Password</label>
                {errors?.password && <p className="text-danger my-3 fw-bold">{errors?.password}</p>}

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
