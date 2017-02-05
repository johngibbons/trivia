import {
  CREATE_ENTRY,
  FETCH_ENTRY
} from '../actions/action-types'

import {
  setEntry
} from '../actions/entry-actions'
import API from '../api'
import { eventChannel } from 'redux-saga';
import { select, fork, put, call, takeLatest, take } from 'redux-saga/effects';
import { currentUserSelector } from '../selectors/current-user-selector';
import {
  updateCategory
} from '../actions/game-actions';
import { database } from 'firebase'

export function* createEntry(action) {
  try {
    const currentUser = yield select(currentUserSelector)
    const newEntryId = yield call(API.createEntryId, null)
    yield call(
      API.createEntry,
      newEntryId,
      action.payload.entry,
      currentUser.id,
      action.payload.groupId
    )
  } catch(errors) {
    console.log(errors)
  }
}

export function* watchCreateEntry() {
  yield fork(takeLatest, CREATE_ENTRY, createEntry)
}

export function subscribe(database, entryId) {
  return eventChannel(emit => {
    database().ref(`/entries/${entryId}`).on('value', snapshot => {
      const gameId = snapshot.val().game;
      emit(setEntry(entryId, snapshot.val()));
      database().ref(`/games/${gameId}/categories`).on('child_changed', data => {
        emit(updateCategory(gameId, data.key, data.val()))
      })
    })
    return () => {};
  })
}

export function* fetchEntry(action) {
  const channel = yield call(subscribe, database, action.payload.id);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* watchFetchEntry() {
  yield fork(takeLatest, FETCH_ENTRY, fetchEntry)
}
