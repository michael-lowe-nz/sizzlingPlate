import React from 'react'

import Dish from './Dish'

const Dishes = ({ dishes }) => (
  <div className="session-dishes columns is-multiline">
    {dishes.map(dish => <Dish key={dish.name} dish={dish}/>)}
  </div>
)

export default Dishes
