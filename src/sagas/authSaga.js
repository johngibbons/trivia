import firebase from "firebase";
import { CHECK_AUTH_STATUS, SIGN_OUT } from "../actions/action-types";
import { signInSuccess, signOutSuccess } from "../actions/user-actions";
import { setNextLocation } from "../actions/ui-actions";
import { call, put, fork, takeLatest } from "redux-saga/effects";
import { replace, push } from "react-router-redux";
import { get } from "./firebase-saga";
import { setUser } from "../actions/user-actions";
import API from "../api";

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      (user) => resolve(user),
      (error) => reject(error)
    );
  });
}

export function* checkAuthStatus(action) {
  try {
    const { nextState } = action.payload;
    const nextLocation = nextState && nextState.location.pathname;
    const user = yield call(getCurrentUser, null);

    if (user) {
      yield put(signInSuccess(user));
      const userModel = yield call(get, "users", user.uid);
      yield put(setUser(userModel));
    } else {
      yield put(signOutSuccess());
    }

    if (user || !action.payload.requireAuth) {
      yield call(action.payload.next, null);
    } else {
      yield put(setNextLocation(nextLocation));
      yield put(replace("/login"));
    }
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchCheckAuthStatus() {
  yield fork(takeLatest, CHECK_AUTH_STATUS, checkAuthStatus);
}

export function* signOut() {
  try {
    yield call(API.signOut, null);
    yield put(signOutSuccess());
    yield put(push("/"));
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchSignOut() {
  yield fork(takeLatest, SIGN_OUT, signOut);
}
