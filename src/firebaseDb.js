import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPMP5jiTBA2-dxtjEisgkOuC0CE6ZoAxA",
    authDomain: "test-f9026.firebaseapp.com",
    projectId: "test-f9026",
    storageBucket: "test-f9026.appspot.com",
    messagingSenderId: "999433979477",
    appId: "1:999433979477:web:1aea33b210b81cf11036dc"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
//npm deploy firebase