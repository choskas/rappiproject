  
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './views/Home'
import { Auth0Provider } from '@auth0/auth0-react';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const domain = 'choskas.us.auth0.com'
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const clientId = 'bkZGjuFgrzV8qT4RapVKhd4y0LhlRDFu'
console.log(domain, clientId, 'hkxs')
const Router = (user) => (
  // <Auth0Provider
  // domain={domain}
  // clientId={clientId}
  // redirectUri={window.location.origin}
  //  >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
        </BrowserRouter>
        // </Auth0Provider>
)
export default Router;