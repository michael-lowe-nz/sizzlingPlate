import React from 'react'
import {connect} from 'react-redux'
import {addDishVote} from '../../reducers/session'
import {bindActionCreators} from 'redux'

import Dish from './Dish'

const Dishes = ({ dishes, addDishVote }) => (
  <div className="session-dishes columns is-multiline">
    {dishes.map(dish => <Dish
      key={dish.id}
      id={dish.id}
      name={dish.name}
      votes={dish.votes}
      />)}
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  addDishVote,
}, dispatch)

const mapStateToProps = ({session, match}) => ({dishes: session.dishes, match})

export default connect(mapStateToProps, mapDispatchToProps)(Dishes)
