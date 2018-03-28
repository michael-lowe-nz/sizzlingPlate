import firebase from '../firebase'

export const ADD_SESSION = 'home/ADD_SESSION'
export const TOGGLE_CREATING_SESSION = 'home/TOGGLE_CREATING_SESSION'
export const SET_NEW_SESSION_INPUT = 'session/SET_NEW_SESSION_INPUT'

const initialState = {
  recentSessions: [],
  newSessionInput: '',
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case ADD_SESSION:
      return {
        ...state,
        recentSessions: [...state.recentSessions, payload]
      }
    case SET_NEW_SESSION_INPUT:
      return {
        ...state,
        newSessionInput: payload
      }
    case TOGGLE_CREATING_SESSION:
      return {
        ...state,
        isCreatingSession: !state.isCreatingSession
      }
    default:
      return state
  }
}

export const getSessions = ids => {
  return dispatch => {
    ids.forEach(id => {
      const recentSession = firebase.firestore()
          .collection('session')
          .doc(id)
        
      recentSession.get().then(doc => {
        if(doc.exists) {
          dispatch({type: ADD_SESSION, payload: {...doc.data(), id}})
        }
      })
    })
  }
}

export const createSession = (title) => {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({type: TOGGLE_CREATING_SESSION})
      const newSession = firebase.firestore()
        .collection('session')
        .doc()
      newSession.set({title})
        .then(() => resolve(newSession.id))
        .then(() => dispatch({type: TOGGLE_CREATING_SESSION}))
        .catch(() => reject('Issue creating session'))
    })
  }
}

export const setNewSessionInput = (value) => {
  return dispatch => {
    dispatch({
      type: SET_NEW_SESSION_INPUT,
      payload: value
    })
  }
}