import firebase from 'firebase';
import { CHECK_AUTH_STATUS } from '../actions/action-types'
import {
  signInSuccess,
  signOutSuccess
} from '../actions/user-actions';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      user => resolve(user),
      error => reject(error)
    )
  })
}

export function* checkAuthStatus(action) {
  try {
    const user = yield call(getCurrentUser, null);
    yield user ? put(signInSuccess(user)) :
      put(signOutSuccess());
    yield user || !action.payload.requireAuth ?
      action.payload.next() : put(replace('/'));
  } catch(errors) {

  }
}

export function* watchCheckAuthStatus() {
  yield fork(takeLatest, CHECK_AUTH_STATUS, checkAuthStatus)
}
