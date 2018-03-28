import firebase from '../firebase'

export const ADD_SESSION = 'home/ADD_SESSION'

const initialState = {
  recentSessions: []
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case ADD_SESSION:
      return {
        ...state,
        recentSessions: [...state.recentSessions, payload]
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
          recentSession.onSnapshot(session => {
            dispatch({type: ADD_SESSION, payload: {...session.data(), id}})
        })
        }
      })
      })
    }
}