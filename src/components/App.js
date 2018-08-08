import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WithAuthentication from './auth/WithAuthentication'
import Landing from './landing/Landing'
import Nav from './nav/Nav'
import Session from './session/Session'
import Home from './home/Home'
import Login from './auth/Login'
import Profile from './profile/Profile'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={Home} />
      <Route path="/session/:id" component={Session} />
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
)

export default WithAuthentication(App)
