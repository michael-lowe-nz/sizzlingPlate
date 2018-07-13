import firebase from '../firebase'

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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Logged In', response)
        dispatch({
          type: TOGGLE_LOGGED_IN
        })
        // dispatch({
        //   type: SET_USER,
        //   payload: response.email
        // })
      })
      .catch(err => {
        console.log('Error logging in:', err)
      })
  }
}

// export const setUser = user => {
//   console.log('set user:', user)
//   return dispatch => {
//     console.log('dispatching:', user.email)
//     // dispatch({
//     //   type: SET_USER,
//     //   payload: user
//     // })
//   }
// }
