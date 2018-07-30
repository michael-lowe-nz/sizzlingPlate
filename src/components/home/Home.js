import React from 'react'
import {push} from 'react-router-redux'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  createSession,
  setNewSessionInput,
  setRestaurantSuggestions,
  setRestaurantInput,
  toggleLoadingRestaurant
} from '../../reducers/home'
import MDSpinner from "react-md-spinner"
import RecentSessions from './RecentSessions'
import SelectRestaurant from './SelectRestaurant'

const Home = ({
    changePage,
    createSession,
    isCreatingSession,
    setNewSessionInput,
    newSessionInput,
    restaurantSuggestions,
    setRestaurantSuggestions,
    restaurantInput,
    setRestaurantInput,
    toggleLoadingRestaurant,
    restaurantLoading,
    auth
}) => {

  function handleNewSession (e) {
    e.preventDefault();
    if (newSessionInput) createSession(newSessionInput, restaurantInput.path)
      .then(id => changePage(id))
      .then(() => setNewSessionInput(''))
      .catch(console.log)
  }

  function handleTitleChange (e) {
    e.preventDefault()
    setNewSessionInput(e.target.value)
  }

  function handleRestaurantChange (value) {
    setRestaurantInput(value)
  }

  console.log('Auth:', auth);
  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />
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
                <label className="label">Select Restaurant</label>
                  <div className="control">
                    <SelectRestaurant
                      value={restaurantInput}
                      suggestions={restaurantSuggestions}
                      onChange={handleRestaurantChange}
                      isLoading={restaurantLoading}
                    />
                  </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <label className="label">Session Title</label>
                  <div className="control">
                    <input placeholder='Name this Session' value={newSessionInput || ''} onChange={handleTitleChange} className="input"></input>
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
  setNewSessionInput,
  setRestaurantInput,
  setRestaurantSuggestions,
  toggleLoadingRestaurant
}, dispatch)

const mapStateToProps = ({ home, auth, isLoggedIn }) => ({
  isCreatingSession: home.isCreatingSession,
  newSessionInput: home.newSessionInput,
  restaurantSuggestions: home.restaurantSuggestions,
  restaurantInput: home.restaurantInput,
  restaurantLoading: home.restaurantLoading,
  auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
