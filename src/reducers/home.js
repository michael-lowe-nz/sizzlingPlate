import firebase from '../firebase'

export const ADD_SESSION = 'home/ADD_SESSION'
export const TOGGLE_CREATING_SESSION = 'home/TOGGLE_CREATING_SESSION'
export const SET_NEW_SESSION_INPUT = 'home/SET_NEW_SESSION_INPUT'
export const SET_RESTAURANT_INPUT = 'home/SET_RESTAURANT_INPUT'
export const ADD_RESTAURANT_SUGGESTIONS = 'home/ADD_RESTAURANT_SUGGESTIONS'
export const TOGGLE_RESTAURANT_LOADING = 'home/TOGGLE_RESTAURANT_LOADING'

const initialState = {
  recentSessions: [],
  newSessionInput: '',
  restaurantInput: '',
  restaurantSuggestions: [],
  restaurantLoading:false,
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
    case SET_RESTAURANT_INPUT: 
      return {
        ...state,
        restaurantInput: payload
      }
    case ADD_RESTAURANT_SUGGESTIONS:
      return {
        ...state,
        restaurantSuggestions: [...state.restaurantSuggestions, payload]
      }
    case TOGGLE_RESTAURANT_LOADING: 
      return {
        ...state,
        restaurantLoading: !state.restaurantLoading
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
      newSession.set({title, created: new Date()})
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

export const setRestaurantInput = (value) => {
  return dispatch => {
    dispatch({
      type: SET_RESTAURANT_INPUT,
      payload: value
    })
  }
}

export const setRestaurantSuggestions = (suggestions) => {
  return dispatch => {
    dispatch({
      type: ADD_RESTAURANT_SUGGESTIONS,
      payload: suggestions
    })
  }
}

export const getRestaurantSuggestions = (query) => {
  return dispatch => {
    firebase
      .firestore()
      .collection('restaurant').get()
      .then(querySnapshots => {
        querySnapshots.forEach(snapshot => {
          // dispatch({
          //   type: ADD_RESTAURANT_SUGGESTIONS,
          //   payload: snapshot.data()
          // })
        })
      })
      .then(() => dispatch({type: TOGGLE_RESTAURANT_LOADING}))
      .catch(console.log)
  }
}

export const toggleLoadingRestaurant = () => {
  return dispatch => dispatch({
    type: TOGGLE_RESTAURANT_LOADING
  })
}