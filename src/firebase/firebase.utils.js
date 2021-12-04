import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2d9xTVcSmSxVGzsHzkOf7ST9puE6hW9g",
  authDomain: "crown-clothing-46695.firebaseapp.com",
  projectId: "crown-clothing-46695",
  storageBucket: "crown-clothing-46695.appspot.com",
  messagingSenderId: "1044283826197",
  appId: "1:1044283826197:web:3ff6f393c34f3c091bee1c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;