import firebase from 'firebase/app'
import config from '../../config'

require('firebase/auth')
require('firebase/firestore')
firebase.initializeApp(config)

const db = firebase.firestore()

const getSessionInfo = (id) => {
  return db.collection('sessions').doc('xTHSfpF2IkRzJ5xvrIuc')
}

const getSessionDishes = (id) => {
  const session = db.collection('sessions').doc('xTHSfpF2IkRzJ5xvrIuc')
  return session.collection('dishes')
}

export {
  getSessionInfo,
  getSessionDishes
}
