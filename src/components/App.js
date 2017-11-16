import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Nav from './nav/Nav'
import Session from './session/Session'
import Home from './home/Home'
import About from './about/About'
import Footer from './footer/Footer'

const App = ({state, dispatch, addDish}) => (
  <Router>
    <div className="body">
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/session' render={(props) => <Session state={state}/>}/>

    </div>
  </Router>
)

export default App
