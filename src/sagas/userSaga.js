import { FETCH_USER } from '../actions/action-types';
import { setUser } from '../actions/user-actions';
import { call, fork, takeLatest, put } from 'redux-saga/effects';
import { get } from './firebase-saga';

export function* fetchUser(action) {
  try {
    const user = yield call(get, 'users', action.payload.id)
    yield put(setUser(user))
  } catch(errors) {

  }
}

export function* watchFetchUser() {
  yield fork(takeLatest, FETCH_USER, fetchUser)
}
