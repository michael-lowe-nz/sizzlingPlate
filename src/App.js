import React, { Component } from 'react';
import './App.css';
import socket from 'socket.io-client';

const App = ({state, dispatch, sendMessage}) => {
  const handleInput = (e) => {
    e.preventDefault()
    dispatch({type: 'HANDLE_INPUT', payload: e.target.value})
  }
  const handleSubmit = () => {
    sendMessage(state.current)
  }
  return (
        <div className="App">
          {state.messages.map(message =>
            <p key={message}>{message}</p>
          )}
          <div className='input'>
            <input type='text' value={state.current} onChange={handleInput} />
            <button onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      )
}

export default App;
