import React from 'react';
import { Route } from 'react-router-dom'
import About from './about/About'
import Nav from './nav/Nav'
import Session from './session/Session'
import Home from './home/Home'
import Login from './auth/Login'

const App = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/session/:id" component={Session} />
    <Route path="/login" component={Login}/>
  </div>
)

export default App
