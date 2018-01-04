import React from 'react'
import {bindActionCreators} from 'redux'

import Dish from './Dish'

const Dishes = ({ dishes }) => (
  <div className="session-dishes columns is-multiline">
    {dishes.map(dish => <Dish key={dish.name} dish={dish}/>)}
  </div>
)

export default Dishes
