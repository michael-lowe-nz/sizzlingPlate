import firebase from '../firebase'
import {
  addSession,
  addDish,
  setDishInput,
  removeDish,
} from '../reducers/session'

export const getSession = (id) => {
  return function(dispatch) {
    firebase.firestore()
      .collection('session')
      .doc(id)
      .onSnapshot(session => {
        dispatch(addSession(session.data()))
      });

    firebase.firestore()
      .collection('session')
      .doc(id)
      .collection('dishes')
      .onSnapshot(dishes => {
        dishes.docChanges
          .filter(dish => dish.type === 'removed')
          .forEach(dish => {
            dispatch(removeDish(dish.doc.id))
          })
        dishes.forEach(dish => {
          const dishData = dish.data()
          const storeDish = {
            ...dishData,
            id: dish.id
          }
          dispatch(addDish(storeDish))
        })
      })
  }
}

export const sendDish = (sessionId, dish) => {
  return function(dispatch) {
    dispatch(setDishInput(''))
    firebase.firestore()
      .collection('session')
      .doc(sessionId)
      .collection('dishes')
      .add(dish)
  }
}

export const deleteDish = (sessionId, dishId) => {
  return function(dispatch) {
    dispatch(removeDish(dishId))
    firebase.firestore()
      .collection('session')
      .doc(sessionId)
      .collection('dishes')
      .doc(dishId)
      .delete()
  }
}

export const sendDishVote = (sessionId, dishId, user, value) => {
  return function(dispatch) {
    const dish = firebase.firestore()
      .collection('session')
      .doc(sessionId)
      .collection('dishes')
      .doc(dishId)

    dish.get()
      .then(response => {
        const votes = response.data().votes
        return dish.update({
          votes: [...votes, {user, value}]
        })
      })
  }
}
