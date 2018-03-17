import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  createSession,
  setNewSessionInput
} from '../../reducers/session'
import MDSpinner from "react-md-spinner";

const NewSession = ({changePage, createSession, isCreatingSession, setNewSessionInput, newSessionInput}) => {
  function handleNewSession (e) {
    e.preventDefault();
    createSession(newSessionInput).then(id => changePage(id))
  }

  function handleTitleChange (e) {
    e.preventDefault()
    setNewSessionInput(e.target.value)
  }
  if(isCreatingSession) {
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
              <input value={newSessionInput || ''} onChange={handleTitleChange} className="input"></input>
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
  createSession,
  setNewSessionInput
}, dispatch)

const mapStateToProps = ({session}) => ({
  isCreatingSession: session.isCreatingSession,
  newSessionInput: session.newSessionInput
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSession)
