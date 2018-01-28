import firebase from '../firebase'
import { addSession, addDish } from '../reducers/session'

export const getSession = (id) => {
  return function(dispatch) {
    firebase.firestore()
      .collection('sessions')
      .doc(id)
      .onSnapshot(session => {
        dispatch(addSession(session.data()))
      });

    firebase.firestore()
      .collection('sessions')
      .doc(id)
      .collection('dishes')
      .onSnapshot(dishes => {
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

// export const addDish = (addDish)
