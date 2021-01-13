import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBivmTG4H9GAyJpyt22wAe_XfBFD3wnUmI',
  authDomain: 'clone-18643.firebaseapp.com',
  projectId: 'clone-18643',
  storageBucket: 'clone-18643.appspot.com',
  messagingSenderId: '1012237967818',
  appId: '1:1012237967818:web:7b03e6541284d1ad0e2f33',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
