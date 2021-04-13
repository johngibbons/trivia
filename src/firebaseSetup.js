import { signInSuccess, fetchOrCreateUser } from "./actions/user-actions";
import firebase from "firebase";
import store from "./store";
import { browserHistory } from "react-router";
import { ui } from "./index";

export function startFirebase(config) {
  firebase.initializeApp(config);
}

export function startFirebaseUI() {
  const uiConfig = {
    callbacks: {
      signInSuccess(currentUser) {
        store.dispatch(signInSuccess(currentUser));
        store.dispatch(fetchOrCreateUser(currentUser));
        const nextLocation = store.getState().ui.nextLocation;
        nextLocation
          ? browserHistory.push(nextLocation)
          : browserHistory.push("/");
        return false;
      },
    },
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  ui.start("#firebase-auth-container", uiConfig);
  return ui;
}

export function stopFirebaseUI(ui) {
  ui.reset();
}
