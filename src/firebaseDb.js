import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6E8enwLkcLf4x1YKbtKjIG_ok2vx355Q",
    authDomain: "kids-coding-7790c.firebaseapp.com",
    databaseURL: "https://kids-coding-7790c-default-rtdb.firebaseio.com",
    projectId: "kids-coding-7790c",
    storageBucket: "kids-coding-7790c.appspot.com",
    messagingSenderId: "883025596117",
    appId: "1:883025596117:web:565bf8bb4b29695c239c5c",
    measurementId: "G-6N3PKF706F"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
export {
    db,auth,
}
//npm deploy firebase