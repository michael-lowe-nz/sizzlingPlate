import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducer'
// import firebase from 'firebase/app'
import config from './config'

// require('firebase/auth')
// require('firebase/firestore')
// firebase.initializeApp(config)
//
// const db = firebase.firestore()

const initialState = {
  loading: true,
  title: 'My Part yeooow',
  location: 'Abel Smith St.',
  dishes: [
    {name: 'Butter Chicken with Honey'},
    {name: 'Tikka Masala (hot)'},
  ]
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)

// const mySession = db.collection('sessions').doc('xTHSfpF2IkRzJ5xvrIuc')
// const myDishes = mySession.collection('dishes')
//
// const addDish = (dish) => myDishes.add(dish)


// mySession.onSnapshot(response => {
//   dispatch({
//     type: 'RECEIVE_SESSION',
//     payload: response.data()
//   })
// })
//
// myDishes.onSnapshot(response => {
//   response.forEach(changedDish => {
//       dispatch({
//         type: 'RECEIVE_DISH',
//         payload: changedDish.data()
//       })
//   })
// })

subscribe(() => {
  render(<App state={getState()} dispatch={dispatch}/>, document.getElementById('root'))
  registerServiceWorker()
})

dispatch({type: 'INIT'})
