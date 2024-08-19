import React from "react";
import './register.css'

const Register = () => {
    return(
        <>
        
    <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h4 className="mb-4 pb-3">Sign Up</h4>
            <img
              src="https://img.icons8.com/?size=100&id=VOgjA1k2Zs2I&format=png&color=000000"
              alt="icon3d"
            />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=Zy5ghkQj2rKy&format=png&color=000000"
                        alt="icon3d"
                      />
                      <div className="form-group">
                        <input
                          type="text"
                          name="logname"
                          className="form-style"
                          placeholder="Your Full Name"
                          id="logname"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          name="logemail"
                          className="form-style"
                          placeholder="Your Email"
                          id="logemail"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="logpass"
                          className="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <a href="#" className="btn mt-4">
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>

    );
    
}
export default Register;