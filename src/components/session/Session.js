import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  addDish,
  addSession,
  setDishInput,
  addDishVote
} from '../../reducers/session'

import Dishes from './Dishes'

const Session = ({title, dishes, addDish, count, setDishInput, dishInput}) => {

  function handleChange (e) {
    e.preventDefault()
    setDishInput(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    addDish({name: dishInput, votes: []})
    setDishInput('')
  }
  return (
  <div className="container">
    <div className="section">
      <div className="session">
        <div className="columns is-multiline session-header">
          <div className="column is-12">
            <div className="session-users">
              <div className="user is-active grow">
                <p>M</p>
              </div>
              <div className="user grow">
                <p>P</p>
              </div>
              <div className="user grow">
                <p>T</p>
              </div>
            </div>
          </div>
          <div className="column is-5">
            <h1 className="title is-4">{title}</h1>
            <div className="columns">
              <div className="column">
                <a className="button is-outlined is-success grow">Share Link</a>
              </div>
              <div className="column is-8">
                <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control has-icons-left">
                        <input value={dishInput} onChange={handleChange} name="dishInput" className="input" placeholder="Enter Dish"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                      <div className="control">
                        <a onClick={handleSubmit} className="button is-info">Add</a>
                      </div>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <Dishes dishes={dishes}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

const mapStateToProps = ({session}) => ({dishes: session.dishes, title: session.title, count: session.count, dishInput: session.dishInput})

const mapDispatchToProps = dispatch => bindActionCreators({
  addDish,
  addDishVote,
  addSession,
  setDishInput,
  changePage: () => push('/')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Session)
