import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducer'
import firebase from 'firebase/app'
import openSocket from 'socket.io-client'
import config from './config'

require('firebase/auth')
require('firebase/firestore')
firebase.initializeApp(config)

const db = firebase.firestore()

const initialState = {
  dishInput: '',
  dishes: []
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)

const mySession = db.collection('sessions').doc('xTHSfpF2IkRzJ5xvrIuc')
const myDishes = mySession.collection('dishes')

const addDish = (dish) => myDishes.add(dish)

mySession.onSnapshot(response => {
  dispatch({
    type: 'RECEIVE_SESSION',
    payload: response.data()
  })
})

myDishes.onSnapshot(response => {
  console.log('Change detected', response)
  response.docChanges.forEach(changedDish => {
    if(getState().dishes.some(dish => dish.name === changedDish.name)) {
      dispatch({
        type: 'RECEIVE_DISH',
        payload: changedDish.data()
      })
    }
  })
})


subscribe(() => {
  ReactDOM.render(<App state={getState()} dispatch={dispatch} addDish={addDish}/>, document.getElementById('root'))
  registerServiceWorker()
})

dispatch({type: 'INIT'})
