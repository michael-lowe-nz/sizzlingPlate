import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import store, { history } from '../store'

import WithAuthentication from './auth/WithAuthentication'
import About from './about/About'
import Nav from './nav/Nav'
import Session from './session/Session'
import Home from './home/Home'
import Login from './auth/Login'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/session/:id" component={Session} />
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)

export default App
