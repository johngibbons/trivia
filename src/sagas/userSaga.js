import { FETCH_USER, FETCH_OR_CREATE_USER } from "../actions/action-types";
import { setUser } from "../actions/user-actions";
import { call, fork, takeLatest, put } from "redux-saga/effects";
import { get } from "./firebase-saga";
import Api from "../api";
import User from "../models/User";

export function* fetchUser(action) {
  try {
    const user = yield call(get, "users", action.payload.id);
    yield put(setUser(user));
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchFetchUser() {
  yield fork(takeLatest, FETCH_USER, fetchUser);
}

export function* createUser(action) {
  try {
    yield call(Api.createUser, action.payload.user);
  } catch (errors) {
    console.log(errors);
  }
}

export function* fetchOrCreateUser(action) {
  try {
    const user = yield call(get, "users", action.payload.user.uid);
    if (user) {
      yield put(setUser(user));
    } else {
      const u = action.payload.user;
      const newUser = new User({
        id: u.uid,
        photoURL: u.photoURL,
        name: u.displayName,
        email: u.email,
      });
      yield call(Api.createUser, newUser);
      yield put(setUser(newUser));
    }
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchFetchOrCreateUser() {
  yield fork(takeLatest, FETCH_OR_CREATE_USER, fetchOrCreateUser);
}
