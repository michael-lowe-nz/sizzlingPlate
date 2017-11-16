import React from 'react'

const Dish = ({ dish }) => (
  <div className="dish column is-12">
    <div className="columns">
      <div className="column is-2"><strong>{dish.name}</strong></div>
      <div className="column is-6">{dish.id}</div>
    </div>
  </div>
)

export default Dish
