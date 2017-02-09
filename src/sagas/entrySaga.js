import {
  CREATE_ENTRY,
  FETCH_ENTRY,
  SELECT_NOMINEE
} from '../actions/action-types'

import {
  setEntry,
  selectNomineeSuccess
} from '../actions/entry-actions'
import { setGame } from '../actions/game-actions';
import { setCategories } from '../actions/category-actions';
import { setNominees } from '../actions/nominee-actions';
import API from '../api'
import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { database } from 'firebase'
import { push } from 'react-router-redux';
import { get } from './firebase-saga';

export function* createEntry(action) {
  try {
    const newEntryId = yield call(API.createEntryId, null)
    yield call(
      API.createEntry,
      newEntryId,
      action.payload
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
    const game = yield call(get, 'games', entry.game)
    yield put(setGame(game))
    const ref = database().ref('categories').orderByChild('game').equalTo(game.id)
    const categories = yield call([ref, ref.once], 'value');
    yield put(setCategories(categories.val()))
    const nomineesRef = database().ref('nominees').orderByChild('game').equalTo(game.id)
    const nominees = yield call([nomineesRef, nomineesRef.once], 'value');
    yield put(setNominees(nominees.val()))
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
