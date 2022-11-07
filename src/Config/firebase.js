import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCSGvHjo3GTdeVr2y6QvJuVdiA0RQ7mUB4",
    authDomain: "fireproject-5ddf5.firebaseapp.com",
    projectId: "fireproject-5ddf5",
    storageBucket: "fireproject-5ddf5.appspot.com",
    messagingSenderId: "107656995261",
    appId: "1:107656995261:web:f7aaa8f3876e625cf4f2d4"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.auth = firebase.auth()
  export default firebase