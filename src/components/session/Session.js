import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  addDish,
  addSession,
  setDishInput,
  addDishVote
} from '../../reducers/session'
import { getSession } from '../../actions/index'

import Dishes from './Dishes'

class Session extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoadSession = this.handleLoadSession.bind(this)
  }
  handleChange (e) {
    e.preventDefault()
    this.props.setDishInput(e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.addDish({name: this.props.dishInput, votes: []})
    this.props.setDishInput('')
  }
  handleLoadSession (e) {
    e.preventDefault()
    this.props.getSession(this.props.match.params.id)
  }
  render() {
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
                <h1 className="title is-4">{this.props.title}</h1>
                <div className="columns">
                  <div className="column">
                    <a onClick={this.handleLoadSession} className="button is-outlined is-success grow">Load Session</a>
                  </div>
                  <div className="column is-8">
                    <form onSubmit={this.handleSubmit}>
                      <div className="field has-addons">
                        <div className="control has-icons-left">
                            <input value={this.props.dishInput} onChange={this.handleChange} name="dishInput" className="input" placeholder="Enter Dish"/>
                            <span className="icon is-small is-left">
                              <i className="fa fa-plus"></i>
                            </span>
                          </div>
                          <div className="control">
                            <a onClick={this.handleSubmit} className="button is-info">Add</a>
                          </div>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
              <div className="column is-12">
                <Dishes dishes={this.props.dishes}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({session}) => ({dishes: session.dishes, title: session.title, count: session.count, dishInput: session.dishInput})

const mapDispatchToProps = dispatch => bindActionCreators({
  addDish,
  addDishVote,
  addSession,
  setDishInput,
  getSession
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Session)
