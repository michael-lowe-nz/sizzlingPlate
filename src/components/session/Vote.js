import React from 'react'

const Vote = ({user, value}) => {

  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <h1>I am a {value} vote</h1>
          </div>
        </div>
      </div>
    </div>
  )}

export default Vote
