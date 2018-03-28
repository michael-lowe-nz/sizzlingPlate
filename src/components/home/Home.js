import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  createSession,
  setNewSessionInput
} from '../../reducers/session'
import MDSpinner from "react-md-spinner"
import RecentSessions from './RecentSessions'

const Home = ({changePage, createSession, isCreatingSession, setNewSessionInput, newSessionInput}) => {
  function handleNewSession (e) {
    e.preventDefault();
    if (newSessionInput) createSession(newSessionInput).then(id => changePage(id))
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

    const localSessions = JSON.parse(window.localStorage.getItem('sessions')) || []

    return (
      <div className="container">
        <div className="section">
          <h1 className="title">Create a new voting session</h1>
          <form onSubmit={handleNewSession} className="columns">
            <div className="column is-4">
              <div className="field">
                <label className="label">Session Title</label>
                  <div className="control">
                    <input value={newSessionInput || ''} onChange={handleTitleChange} className="input"></input>
                </div>
              </div>
            </div>
          </form>
          <div className="columns">
            <div className="column is-4">
              <button type='submit' onClick={handleNewSession} className="button is-primary">Create Session</button>
            </div>
          </div>
          <RecentSessions sessionIds={localSessions}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
