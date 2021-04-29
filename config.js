import firebase from 'firebase'
require('@firebase/firestore')




var firebaseConfig = {
    apiKey: "AIzaSyBxy3wyCFCJ4sQfWwuGU3_DHdA2Rk0SoR0",
    authDomain: "barter-642db.firebaseapp.com",
    projectId: "barter-642db",
    storageBucket: "barter-642db.appspot.com",
    messagingSenderId: "543749438633",
    appId: "1:543749438633:web:8dd548ae475224017b3db8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()