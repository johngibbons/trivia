import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { startFirebase } from './firebase';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
injectTapEventPlugin();
startFirebase();
export const ui = new firebaseui.auth.AuthUI(firebase.auth())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
