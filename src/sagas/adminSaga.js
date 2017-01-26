import {
  SUBMIT_SEARCH
} from '../actions/action-types';
import {
  submitSearchSuccess,
  submitSearchFailure
} from '../actions/admin-actions';
import MovieDB from '../moviedb';

import { call, put, takeLatest } from 'redux-saga/effects';

export function* searchSubmit(action) {
  try {
    const response = yield call(MovieDB.searchMulti, action.payload.value);
    yield put(submitSearchSuccess(response));
  } catch(errors) {
    yield put(submitSearchFailure(errors));
  }
}

export function* watchSearchSubmit() {
  yield takeLatest(SUBMIT_SEARCH, searchSubmit);
}
