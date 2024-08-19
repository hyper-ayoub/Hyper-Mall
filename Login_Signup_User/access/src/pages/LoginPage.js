import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './login.css'
 
export default function LoginPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                
                navigate("/");
                alert("login successful 😎")
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
 
  return (
    <div>
        <div className="container h-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <p className="lead fw-normal mb-0 me-3">Log Into Your Account</p>
                <form className="form-c">
                  
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  </div>
                  <label className="form-label" for="form3Example3">Email address</label>
                  <div className="form-outline mb-4"> 
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="btn btn-primary btn-lg"placeholder="Enter a valid email address" />
                 
                  </div>
  
                  <label className="form-label" for="form3Example4">Password</label>
                  <div className="form-outline mb-3"> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="btn btn-primary btn-lg" placeholder="Enter password" />
                
                  </div>
 
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="radio" value="" id="form2Example3" />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>
 
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={logInUser} >Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register" className="btn-primary">Register</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}