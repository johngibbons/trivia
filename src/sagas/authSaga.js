import firebase from 'firebase';
import {
  CHECK_AUTH_STATUS,
  SIGN_OUT
} from '../actions/action-types'
import {
  signInSuccess,
  signOutSuccess
} from '../actions/user-actions';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { replace, push } from 'react-router-redux';
import API from '../api';

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
      call(action.payload.next, null) : put(replace('/'));
  } catch(errors) {

  }
}

export function* watchCheckAuthStatus() {
  yield fork(takeLatest, CHECK_AUTH_STATUS, checkAuthStatus)
}

export function* signOut() {
  try {
    yield call(API.signOut, null);
    yield put(signOutSuccess());
    yield put(push('/'));
  } catch(errors) {
    console.log(errors)
  }
}

export function* watchSignOut() {
  yield fork(takeLatest, SIGN_OUT, signOut)
}
