import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyCLDzmLZXONgvr_ZBhxde5Sg7dWkcI-paI",
  authDomain: "linkedin-clone-da8ce.firebaseapp.com",
  projectId: "linkedin-clone-da8ce",
  storageBucket: "linkedin-clone-da8ce.appspot.com",
  messagingSenderId: "555009666837",
  appId: "1:555009666837:web:fa23491c7e61bb6acec31c"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db, auth}