import React from 'react'
import {connect} from 'react-redux'
import {deleteDish, sendDishVote} from '../../reducers/session'
import {bindActionCreators} from 'redux'

import Dish from './Dish'

const Dishes = ({ dishes, sendDishVote, deleteDish, sessionId }) => {
  return(
  <div className="session-dishes columns is-multiline">
    {dishes.map(dish => <Dish
      sendDishVote={sendDishVote}
      deleteDish={deleteDish}
      key={dish.id}
      id={dish.id}
      name={dish.name}
      votes={dish.votes}
      sessionId={sessionId}
      />)}
  </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({
  sendDishVote,
  deleteDish
}, dispatch)

const mapStateToProps = ({session}) => ({dishes: session.dishes})

export default connect(mapStateToProps, mapDispatchToProps)(Dishes)
