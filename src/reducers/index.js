import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './home'
import session from './session'
import nav from './nav'

export default combineReducers({
  router: routerReducer,
  home,
  session,
  nav,
})
