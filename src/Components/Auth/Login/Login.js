import React, { useEffect, useState } from "react";
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword , } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsEyeFill} from 'react-icons/bs'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {
  const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(
    auth
  );
  const [showPassword , setShowPassword] = useState(false)
  
     const navigate = useNavigate()
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
        useEffect(()=>{
          if(error){
            toast(error?.message)
           
          }
        },[error])
      
      const handleResetPassword = async () =>{
        if(userInfo.email){

          await sendPasswordResetEmail(userInfo.email)
          toast('Sent Email')
        }else{
          toast('Please Enter Your Email Address')
        }
      }
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }
     
  
  return (
    <div>
      <form onSubmit={handleCreateAccount}>
        <div className="login">
          <h1 className="title">Login</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-12">
                <input placeholder="Email" required onChange={handleEmail} className="input-text" type="email" name="email" />
                {errors?.email && (
                  <p className="text-danger my-3 fw-bold">{errors?.email}</p>
                )}
              </div>
              <div className="form-field col-lg-12">
                <input placeholder="password" required onChange={handlePassword} className="input-text" type={showPassword? "text" :"password"} name="password" />
                {errors?.password && (
                  <p className="text-danger my-3 fw-bold">{errors?.password}</p>
                )}
               <p className="mt-3">{<BsEyeFill size={20} onClick={()=> setShowPassword(!showPassword)}/>} show Password</p>
               <p>Forget Password? <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={handleResetPassword}>Reset Password</button></p> 
               
              </div>
              
              <div className="form-field col-lg-12">
              
               <p className="my-3">New In NH Travel? <Link to="/register">Create Account</Link></p>
               
               <div className="d-flex align-items-center ">
                
                <input
                  className="login-btn"
                  type="submit"
                  name=""
                  value="Login"
                />
               <SocialLogin/>
               </div>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
