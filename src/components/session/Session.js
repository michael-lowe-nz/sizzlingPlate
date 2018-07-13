import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  getSession,
  addDish,
  setDishInput,
  toggleSessionLoading
} from '../../reducers/session'
import MDSpinner from "react-md-spinner"
import {CopyToClipboard} from 'react-copy-to-clipboard'

import WithAuthentication from '../auth/WithAuthentication'
import Dishes from './Dishes'

class Session extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const sessionId = this.props.match.params.id

    this.props.toggleSessionLoading()
    this.props.getSession(sessionId)
    
    const localSessions = JSON.parse(window.localStorage.getItem('sessions')) || []
    if (!localSessions.includes(sessionId)) {
      window.localStorage.setItem('sessions', JSON.stringify([...localSessions, sessionId]))
    }

  }
  handleChange(e) {
    e.preventDefault()
    this.props.setDishInput(e.target.value)
  }
  handleSubmit(e) {
    e.preventDefault()
    if(this.props.dishInput) {
      this.props.addDish(this.props.match.params.id, {
        name: this.props.dishInput,
        votes: []
      })
    }
  }
  render() {
    if (this.props.isLoading) {
      const style = {
        display: 'flex',
        width: '100%',
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center'
      }
      return (
        <div style={style}>
          <MDSpinner/>
        </div>
      )
    }
    return (<div className="container">
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
            <div className="column is-12">
              <h1 className="title is-4">
                <div className="columns">
                  <div className="column is-10">
                    {this.props.title}
                  </div>
                  <div className="column is-2">
                    <CopyToClipboard text={window.location.href}>
                      <a className="button is-info is-outlined">Copy Link</a>
                    </CopyToClipboard>
                  </div>
                </div>
              </h1>
              <div className="columns">
                <div className="column is-8">
                  <form className="addDish" onSubmit={this.handleSubmit}>
                    <div className="field has-addons">
                      <div className="control has-icons-left">
                        <input value={this.props.dishInput || ''} onChange={this.handleChange} name="dishInput" className="input" placeholder="Enter Dish"/>
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
              <Dishes dishes={this.props.dishes} sessionId={this.props.match.params.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = ({session}) => ({
  dishes: session.dishes,
  title: session.title,
  count: session.count,
  dishInput: session.dishInput,
  isLoading: session.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addDish,
  setDishInput,
  getSession,
  toggleSessionLoading
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Session)
