import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { ui } from './index';
import { signInSuccess } from './actions/user-actions';
import store from './store';

export function startFirebase() {
  const config = {
    apiKey: "AIzaSyDGkgi0mqNXArVXeP2X9kF421JGP9Yi4bY",
    authDomain: "awards-season.firebaseapp.com",
    databaseURL: "https://awards-season.firebaseio.com",
    storageBucket: "awards-season.appspot.com",
    messagingSenderId: "829477688648"
  };

  firebase.initializeApp(config);
}

export function startFirebaseUI() {
  const ui = new firebaseui.auth.AuthUI(firebase.auth())
  const uiConfig = {
    callbacks: {
      signInSuccess(currentUser) {
        store.dispatch(signInSuccess(currentUser));
        return false;
      }
    },
    signInSuccessUrl: '/',
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }
  ui.start('#firebase-auth-container', uiConfig);
}

export function stopFirebaseUI() {
  ui.reset();
}
