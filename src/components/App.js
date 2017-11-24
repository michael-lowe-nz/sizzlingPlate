import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'


import Nav from './nav/Nav'
import Session from './session/Session'
import Home from './home/Home'
import About from './about/About'
import Footer from './footer/Footer'

const App = ({ store, history }) => {

  console.log('state: ', store)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <div className="body">
            <Nav />

            <Route exact path='/' store={store} component={Home} />
            <Route path='/about' store={store} component={About} />
            <Route path='/session/:id' store={store} component={Session}/>

          </div>
        </Router>
      </ConnectedRouter>
  </Provider>
)
}

export default App
