import React from 'react'
import {connect} from 'react-redux'
import {addDishVote} from '../../reducers/session'
import {bindActionCreators} from 'redux'
import { deleteDish } from '../../actions/index'

import Dish from './Dish'

const Dishes = ({ dishes, addDishVote }) => (
  <div className="session-dishes columns is-multiline">
    {dishes.map(dish => <Dish
      key={dish.id}
      id={dish.id}
      name={dish.name}
      votes={dish.votes}
      addDishVote={addDishVote}
      deleteDish={deleteDish}
      />)}
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  addDishVote,
  deleteDish
}, dispatch)

const mapStateToProps = ({session}) => ({dishes: session.dishes})

export default connect(mapStateToProps, mapDispatchToProps)(Dishes)
