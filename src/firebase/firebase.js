import * as firebase from 'firebase'
require('firebase/firestore')

const config = {
    apiKey: "AIzaSyB94y02p0ED9dwcfvh4UmK0CaV5nE08u4Q",
    authDomain: "sizzling-plate.firebaseapp.com",
    databaseURL: "https://sizzling-plate.firebaseio.com",
    projectId: "sizzling-plate",
    storageBucket: "sizzling-plate.appspot.com",
    messagingSenderId: "728284570852"
  }
firebase.initializeApp(config)

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

// export default firebase
