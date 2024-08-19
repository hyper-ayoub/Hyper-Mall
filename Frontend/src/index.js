import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="415390873537-tcrhf570pdh5hr6m20jhsvn8mhdlh5t3.apps.googleusercontent.com">
    <Auth0Provider
    domain="dev-xjvcebnashb5uc2t.us.auth0.com"
    clientId="yRBLAG7faruYrHu6VIweyQ8EZbtu9XDb"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>,
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
  
  document.getElementById('root')
);