import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { startFirebase } from "./firebaseSetup";
import firebase from "firebase";
import firebaseui from "firebaseui";
import { save, saveImages, deleteGame } from "./helpers/game-helper";
import { STAGING_DATABASE, PROD_DATABASE } from "./constants";
startFirebase(PROD_DATABASE);
save();
saveImages(true);
// deleteGame(true);
export const ui = new firebaseui.auth.AuthUI(firebase.auth());

ReactDOM.render(<App />, document.getElementById("root"));
