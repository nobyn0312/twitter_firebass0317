import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig ={
  appKey:process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABSE,
  storageBucket:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
  appid:process.env.REACT_APP_APP_ID,
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

export const db =firebaseApp.firestore();
export const auth =firebase.auth();
export const storage =firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();