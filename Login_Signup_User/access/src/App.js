import React, { } from 'react';
import './App.css';
  
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
  
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
 
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="col-12">
      <section>
      <h1>Welcome to Hyper-mall Access User</h1>
      <h1> First create account</h1>
      <h1> login to your account</h1>
     <h1> access to global website</h1>
     <a className='access' href='http://localhost:3000'> Access Here</a>
      </section>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      
     <div>
     </div>
    </div>
    </div>
    
  );
}
   
export default App;
