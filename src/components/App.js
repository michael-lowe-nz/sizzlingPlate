import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Nav from './nav/Nav'
import Session from './session/Session'
import NewSession from './session/NewSession'

const App = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/session" component={NewSession} />
    <Route path="/session/:id" component={Session} />
  </div>
)

export default App
