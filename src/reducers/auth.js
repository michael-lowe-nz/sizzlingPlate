export const TOGGLE_LOGGED_IN = 'auth/TOGGLE_LOGGED_IN'
export const SET_USER = 'auth/SET_USER'
export const REMOVE_USER = 'auth/REMOVE_USER'

const initialState = {
  isLoggedIn: false,
  user: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    case SET_USER:
      return {
        ...state,
        user: payload
      }
    case REMOVE_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

export const login = (email, password) => {
  return dispatch => {

  }
}

export const setUser = user => {
  return dispatch => {
    dispatch({
      type: SET_USER,
      payload: user
    })
  }
}
