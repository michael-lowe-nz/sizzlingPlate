import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducer';
import firebase from 'firebase/app';
import openSocket from 'socket.io-client';
import config from './config';

require('firebase/auth');
require('firebase/firestore');
firebase.initializeApp(config);

const db = firebase.firestore();

// db.collection('sessions').add({
//   name: 'Silly Stevens Sovereignty Party'
// })
// .then(response => {
//   console.log('Have saved the thing and got: ', response);
// })

const socket = openSocket('http://localhost:8888');

const sendMessage = message => socket.emit('message', message)

socket.on('message', message => {
  console.log('Received Message back from server')
  console.log('message is:', message)
  dispatch({type: 'SEND_MESSAGE', payload: message})
})

const initialState = {
  current: "",
  messages: [
    "Perry the Patient Turtle"
  ]
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)

subscribe(() => {
  ReactDOM.render(<App state={getState()} dispatch={dispatch} sendMessage={sendMessage} />, document.getElementById('root'));
  registerServiceWorker();
})

db.collection("sessions").get()
  .then(querySnapshot => {
    console.log('This is the response from getting:', querySnapshot);
    querySnapshot.forEach(doc => {
      dispatch({
        type: 'SEND_MESSAGE',
        payload: doc.data().name
      })
    })
  })

dispatch({type: 'INIT'})
