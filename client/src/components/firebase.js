// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAcN7ncYhUbcmxerWlWODn11_g9hScxmqg",
  authDomain: "facebook-clone-979cc.firebaseapp.com",
  projectId: "facebook-clone-979cc",
  storageBucket: "facebook-clone-979cc.appspot.com",
  messagingSenderId: "442465633576",
  appId: "1:442465633576:web:0610d81948838b48d03c1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db;