import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter  } from "react-router-dom";
import store from './store'
import App from './components/App'

import { Auth0Provider } from "@auth0/auth0-react";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
    domain="https://pets/api"
    clientId="UfmFgK7k0mAFp0QSo2Aa2tttedDYXmE8"
    redirectUri={window.location.origin}
  >  
    <Provider store={store}> 
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
    </Auth0Provider>
  , document.getElementById('app'))
})
