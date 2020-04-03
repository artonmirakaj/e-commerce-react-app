import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC1i_ylrnNHyLTTrrN8ZC3CwRFVfYpwUyw",
  authDomain: "crwn-db-6a536.firebaseapp.com",
  databaseURL: "https://crwn-db-6a536.firebaseio.com",
  projectId: "crwn-db-6a536",
  storageBucket: "crwn-db-6a536.appspot.com",
  messagingSenderId: "74033125209",
  appId: "1:74033125209:web:c405618c883021ccfe1e48",
  measurementId: "G-CJ4HRC7P2C"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
