import React, { } from "react";
import {Link} from 'react-router-dom';

import './Landing.css';

export default function LandingPage(){
 
  return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <p><Link to="/login" className="btn btn-success">Login</Link> | 
                    <Link to="/register" className="btn btn-success">register</Link> </p>
                </div>
            </div>
        </div>
    </div>
  );
}