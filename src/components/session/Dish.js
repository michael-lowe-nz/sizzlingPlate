import React from 'react'

const Dish = ({addDishVote, deleteDish, votes, name, id, sessionId}) => {

  function handleUpVote(e) {
    e.preventDefault()
    addDishVote(name, {
      user: 'M',
      value: 1
    })
  }

  function handleDownVote(e) {
    e.preventDefault()
    addDishVote(name, {
      user: 'J',
      value: -1
    })
  }

  function handleDeleteDish(e) {
    e.preventDefault()
    deleteDish(sessionId, id)
  }
  return (<div className="dish column is-12">
    <div className="columns">
      <div className="column is-2">
        <strong>{name}</strong>
      </div>
      <div className="column is-4">
        <div className="field has-addons">
          <p className="control">
            <a onClick={handleUpVote} className="button is-medium">
              <span role="img" aria-label="thumbs up">👍</span>
              <span>{votes.filter(vote => vote.value > 0).length || null}</span>
            </a>
          </p>
          <p className="control">
            <a onClick={handleDownVote} className="button is-medium">
              <span role="img" aria-label="thumbs down">👎</span>
              <span>{votes.filter(vote => vote.value < 0).length || null}</span>
            </a>
          </p>
          <p className="control">
            <a onClick={handleDeleteDish} className="button is-medium">
              <span role="img" aria-label="trash emoji">🗑</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>)
}

export default Dish