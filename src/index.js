import './index.css'
// import registerServiceWorker from './registerServiceWorker'

// require('firebase/auth')
// require('firebase/firestore')
// firebase.initializeApp(config)
// const db = firebase.firestore()

import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducer from './reducer'

import App from './components/App'

const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

store.subscribe(() => render(<App history={history} store={store} />, document.getElementById('root')))

store.dispatch({type: 'INIT'})

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//         <Route exact path="/" component={Home}/>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )
