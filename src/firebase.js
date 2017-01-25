import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { ui } from './index';
import { signInSuccess } from './actions/user-actions';
import store from './store';

const config = {
    apiKey: "AIzaSyDGkgi0mqNXArVXeP2X9kF421JGP9Yi4bY",
    authDomain: "awards-season.firebaseapp.com",
    databaseURL: "https://awards-season.firebaseio.com",
    storageBucket: "awards-season.appspot.com",
    messagingSenderId: "829477688648"
};

const uiConfig = {
  callbacks: {
    signInSuccess(currentUser, cred, redirectUrl) {
      store.dispatch(signInSuccess(currentUser));
      return false;
    }
  },
  signInSuccessUrl: '/',
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}

export const startFirebase = () => {
  firebase.initializeApp(config);
}

export const startFirebaseUI = () => {
  ui.start('#firebase-auth-container', uiConfig);
}

export const stopFirebaseUI = () => {
  ui.reset();
}
