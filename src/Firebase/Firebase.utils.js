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

// storing authenticated user into the database 
export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return; // exit from function 

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);
  if (!snapShot.exits) {
      const { displayName, email   } = userAuth;
      const createdAt = new Date();
    try {
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...data
      })
    } catch (error) {
       console.log(`Error creating the user`, error.message)
    }

  }
  return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;