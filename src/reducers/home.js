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

export const getSession = (id) => {
    return dispatch => {
        firebase.firestore()
            .collection('session')
            .doc(id)
            .onSnapshot(session => {
                console.log('session snapshot')
                dispatch({type: ADD_SESSION, payload: session.data()})
            })
        }
}

export const getSessions = ids => {
  return dispatch => {
    ids.forEach(id => {
      const recentSession = firebase.firestore()
          .collection('session')
          .doc(id).exists()
        
      if(recentSessions) {
        recentSession.onSnapshot(session => {
            console.log('session snapshot')
            dispatch({type: ADD_SESSION, payload: session.data()})
        })
      }
      })
    }
}