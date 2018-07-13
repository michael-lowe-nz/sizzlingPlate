import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './home'
import session from './session'
import nav from './nav'
import auth from './auth'

export default combineReducers({
  router: routerReducer,
  home,
  session,
  nav,
  auth
})
