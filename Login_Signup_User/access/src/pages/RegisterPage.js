import React, { useState } from "react";
import axios from 'axios';
import './register.css'
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/register', {
            full_name: fullName,
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
            alert("Register successful 😁")
            navigate("/");
        })
		
        .catch(function (error) {
            console.log(error, 'error');
			if(error.response) {
				if(error.response.status === 401) {
					alert("Invalid credentials");
				}else{
					alert("User already exists");
				}
			}
        });
    };

    return (
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                            <form className="form-container">
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                </div>

                                {/* Full Name Input */}
                                <label className="form-label" htmlFor="formFullName">Full Name</label>
                                <div className="text-center text-lg-start mt-4 pt-2"> 
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        id="formFullName"
                                        className="btn btn-primary btn-lg"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email Input */}
                                <label className="form-label" htmlFor="formEmail">Email address</label>
                                <div className="text-center text-lg-start mt-4 pt-2">
                            
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="formEmail"
                                        className="btn btn-primary btn-lg"
                                        placeholder="Enter a valid email address"
                                    />
                                </div>

                                {/* Password Input */}
                                <label className="form-label" htmlFor="formPassword">Password</label>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="formPassword"
                                        className="btn btn-primary btn-lg"
                                        placeholder="Enter password"
                                    />
                                    
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="radio" value="" id="formRememberMe" />
                                        <label className="form-check-label" htmlFor="formRememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={registerUser}>Sign Up</button>

                                    <p className="small fw-bold mt-2 pt-1 mb-0"> Already have Account &nbsp;<a href="/login" className="btn-primary">Login</a></p>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-9 col-lg-6 col-xl-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
