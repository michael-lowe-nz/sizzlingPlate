import React, { Component } from 'react';
import './App.css';
import socket from 'socket.io-client';

const App = ({state, dispatch, addDish}) => {
  const handleInput = (e) => {
    e.preventDefault()
    dispatch({type: 'HANDLE_INPUT', payload: e.target.value})
  }
  const handleSubmit = () => {
    addDish({name: state.dishInput})
      .then(response => {
        console.log('saved:', response)
      })
  }
  return (
        <div className="App">
          <div className='input'>
            <h1>{state.title}</h1>
            <h2>{state.location}</h2>
            <ul>
              {state.dishes.map(dish => <li key={dish.id}>{dish.name || dish.title}</li>)}
            </ul>
            <input type='text' value={state.dishInput} onChange={handleInput} />
            <button onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
  )
}

export default App;
