import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  createSession
} from '../../reducers/session'
import MDSpinner from "react-md-spinner";

const NewSession = ({changePage, createSession, isCreatingSession}) => {
  function handleNewSession (e) {
    e.preventDefault();
    createSession().then(id => changePage(id))
  }
  if(isCreatingSession) {
    return <MDSpinner />
  } else {
    return (
      <div className="container">
        <div className="section">
          <div className="columns is-mobile">
            <div className="column is-4">
              <label>Choose a restauraunt</label>
              <input className="input"/>
            </div>
            <div className="column is-4">
              <label>Give your event a name</label>
              <input className="input"></input>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <button onClick={handleNewSession} className="button is-primary">Create Session</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators({
  changePage: (id) => push(`session/${id}`),
  createSession
}, dispatch)

const mapStateToProps = ({session}) => ({
  isCreatingSession: session.isCreatingSession
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSession)
