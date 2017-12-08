// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
//
//
// import Nav from './nav/Nav'
// import Session from './session/Session'
// import Home from './home/Home'
// import About from './about/About'
// import Footer from './footer/Footer'
//
// const App = (props) => {
//   console.log('App store: ', props.store)
//   console.log('props: ', props);
//   // console.log('history: ', history);
//   // console.log('App store.getState: ', store.getState())
//   return (
//     <h1>Maggot Jack</h1>
//   //   <Provider store={store}>
//   //     <ConnectedRouter history={history}>
//   //       <Router>
//   //         <div className="body">
//   //           <Nav />
//   //
//   //           <Route exact path='/' store={store} component={Home} />
//   //           <Route path='/about' store={store} component={About} />
//   //           <Route path='/session/:id' store={store} component={Session}/>
//   //
//   //         </div>
//   //       </Router>
//   //     </ConnectedRouter>
//   // </Provider>
// )
// }
//
// export default App

// import React, {Component} from 'react';
// import Nav from './nav/Nav';
// import {connect} from 'react-redux';
//
// class App extends Component {
//  render () {
//    return (
//     <Nav />
//    )
//  }
// }
// export default connect(state => state)(App);

import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Nav from './nav/Nav'
import Session from './session/Session'

const App = () => (
  <div>
    <Nav />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/session" component={Session} />
    </main>
  </div>
)

export default App
