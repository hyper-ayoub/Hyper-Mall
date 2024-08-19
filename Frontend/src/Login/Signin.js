import React from 'react';
import './SignIn.css';

const SignIn = () => {
  
  return (
    <>
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h4 className="mb-4 pb-3">Log In</h4>
            <img
              src="https://img.icons8.com/?size=100&id=KCnCdBuzs4rm&format=png&color=000000"
              alt="icon3d"
            />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=lp9Lv0PWqOBh&format=png&color=000000"
                        alt="icon3d"
                      />
                      <div className="form-group">
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
                      <p className="mb-0 mt-4 text-center">
                        <a href="#0" className="link">
                          Forgot your password?
                        </a>
                      </p>
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
};

export default SignIn;