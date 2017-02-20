import {
  CREATE_ENTRY,
  FETCH_ENTRY,
  SELECT_NOMINEE,
  FETCH_USER_ENTRIES
} from '../actions/action-types'

import {
  setEntry,
  selectNomineeSuccess,
  setEntries
} from '../actions/entry-actions'
import { currentUserSelector } from '../selectors/current-user-selector';
import API from '../api'
import { fork, put, call, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { get } from './firebase-saga';
import { fetchGameAndDependents, syncCategories } from './gameSaga';
import { database } from 'firebase';

export function* createEntry(action) {
  try {
    const currentUser = yield select(currentUserSelector);
    const newEntryId = yield call(API.createEntryId, null)
    yield call(
      API.createEntry,
      newEntryId,
      action.payload,
      currentUser
    )
    yield put(push(`/entries/${newEntryId}`))
  } catch(errors) {
    console.log(errors)
  }
}

export function* watchCreateEntry() {
  yield fork(takeLatest, CREATE_ENTRY, createEntry)
}

export function* fetchEntry(action) {
  try {
    const entry = yield call(get, 'entries', action.payload.id)
    yield put(setEntry(entry))
    yield call(fetchGameAndDependents, entry.game);
    yield call(syncCategories);
  } catch(errors) {
    console.log(errors)
  }
}

export function* watchFetchEntry() {
  yield fork(takeLatest, FETCH_ENTRY, fetchEntry)
}

export function* selectNominee(action) {
  try {
    yield call(API.selectNominee, action.payload.entryId, action.payload.nominee);
    yield put(selectNomineeSuccess(action.payload.entryId, action.payload.nominee))
  } catch(errors) {
    console.log(errors)
  }
}

export function* watchSelectNominee() {
  yield fork(takeLatest, SELECT_NOMINEE, selectNominee)
}

export function* fetchUserEntries(action) {
  try {
    const user = yield call(get, 'users', action.payload.userId);
    const ref = database().ref('entries').orderByChild('user').equalTo(user.id)
    const entries = yield call([ref, ref.once], 'value');
    yield put(setEntries(entries.val()))
  } catch(errors) {

  }
}

export function* watchUserEntries() {
  yield fork(takeLatest, FETCH_USER_ENTRIES, fetchUserEntries)
}
