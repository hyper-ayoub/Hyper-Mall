import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import  Footer from "../Footer/Footer"
import Product from '../Products/product';
import RiseLoader  from "react-spinners/RiseLoader";



export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  
  const color = "white"; 
  const override = {};

  return (
    <>
      { 
        loading ? (
          <div className="loader-container">
            <RiseLoader 
              color={color}
              size ={25}
              loading={loading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            {/* Header component */}
            <Header />
            
            {/* Login with Google */}
            <div className="google-login-wrapper">
              {!user ? (
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse?.credential);
                    setUser(decoded); // Set user info on successful login
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              ) : (
                <div className="welcome-card">
                  <h2>Welcome to HyperMall, {user.name}!</h2>
                </div>
              )}
              
              {/* 3D model */}
              <model-viewer 
                className="module"
                src="scene.gltf"
                alt="A 3D model of a car"
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar
              ></model-viewer>
            </div>
            
        
            
            {/* Product component */}
            <Product />
            
            {/* Footer */}
            <Footer />
          </>
        )}
        </>  );}
