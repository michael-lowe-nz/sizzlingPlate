import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addDish, addSession, setDishInput} from '../../reducers/session'

import Dishes from './Dishes'

const Session = ({title, dishes, addDish, count, setDishInput, dishInput}) => {

  function handleSubmit (e) {
    e.preventDefault()
    addDish({name: 'Minedu'})
  }
  return (
  <div className="container">
    <div className="section">
      <div className="session">
        <div className="columns is-multiline session-header">
          <div className="column is-5">
            <h1 className="title is-4">{title}</h1>
            <div className="columns">
              <div className="column">
                <a className="button is-outlined grow">Share Link</a>
              </div>
              <div className="column is-8">
                <div className="field has-addons">
                  <p>{dishInput}</p>
                  <form onSubmit={handleSubmit}>
                    <div className="control has-icons-left">
                      <input className="input" placeholder="Enter Dish"/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-plus"></i>
                      </span>
                      <div className="control">
                        <a type="submit" onClick={handleSubmit} className="button is-info">Add</a>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div className="column is-7">
            <div className="session-users">
              <div className="user is-active grow">
                <p>Michael</p>
              </div>
              <div className="user grow">
                <p>Peter</p>
              </div>
              <div className="user grow">
                <p>T-Dawg</p>
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
  addSession,
  setDishInput,
  changePage: () => push('/')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Session)
