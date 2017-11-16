import React from 'react'

import Dishes from './Dishes'

const Session = ({ state, match }) => {
  function handleCopy () {
    console.log('copying')
    // `https://gitlab.cwp.govt.nz`.select();
    document.execCommand("Copy")
  }

  return (
    <div className="container">
      <div className="section">
        <div className="session">
          <div className="columns session-header">
            <div className="column is-5">
              <h1 className="title is-4">{state.title}</h1>
              <h2 className="subtitle is-5">{state.location}</h2>
              <a onClick={handleCopy} className="button is-outlined">Share Link</a>
            </div>
            <div className="column is-7">
              <div className="session-users">
              <div className="user is-active">
                <p>Michael</p>
              </div>
              <div className="user">
                <p>Peter</p>
              </div>
              <div className="user">
                <p>T-Dawg</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <Dishes dishes={state.dishes}/>
      </div>
    </div>
  )
}

export default Session
