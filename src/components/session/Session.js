import React from 'react'

import Dishes from './Dishes'

const Session = ({ state, match }) => {
  return (
    <div className="section">
      <div className="container">
      <div className="session">
        <h1 className="title is-2">{state.title}</h1>
        <h2 className="subtitle is-4">{state.location}</h2>
        <Dishes dishes={state.dishes}/>
      </div>
      </div>
    </div>
  )
}

export default Session
