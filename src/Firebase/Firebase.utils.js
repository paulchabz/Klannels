import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAVL5Vu8aF1tFxXxuNRHhFp6wHfGVKLHlo",
    authDomain: "webstore-5e78f.firebaseapp.com",
    databaseURL: "https://webstore-5e78f.firebaseio.com",
    projectId: "webstore-5e78f",
    storageBucket: "webstore-5e78f.appspot.com",
    messagingSenderId: "644251444923",
    appId: "1:644251444923:web:f304583f47fa4edf93ab9e",
    measurementId: "G-L272X0QJD4"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;