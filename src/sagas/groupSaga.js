import { call, put, takeLatest, fork, select } from 'redux-saga/effects';
import {
  CREATE_GROUP,
  FETCH_GROUP
} from '../actions/action-types';
import {
  createGroupSuccess,
  setGroup
} from '../actions/group-actions';
import {
  setEntry,
  setEntries
} from '../actions/entry-actions';
import { database } from 'firebase';
import API from '../api';
import { currentUserSelector } from '../selectors/current-user-selector';
import { push } from 'react-router-redux';
import {
  fetchGameAndDependents,
  syncCategories
} from './gameSaga';
import {
  get,
  sync,
  CHILD_CHANGED,
  CHILD_ADDED
} from './firebase-saga';

export function* createGroup(action) {
  try {
    const currentUser = yield select(currentUserSelector);
    const newGroupId = yield call(API.createGroupId, null)
    yield call(API.createGroup, newGroupId, action.payload, currentUser.id)
    yield put(createGroupSuccess(newGroupId, action.payload))
    yield put(push(`/groups/${newGroupId}`))
  } catch(errors) {
    console.log(errors);
  }
}

export function* watchCreateGroup() {
  yield fork(takeLatest, CREATE_GROUP, createGroup)
}

export function* fetchGroup(action) {
  const { id } = action.payload;
  try {
    const group = yield call(get, 'groups', id)
    yield put(setGroup(id, group));
    const ref = database().ref('entries').orderByChild('group').equalTo(id)
    const entries = yield call([ref, ref.once], 'value');
    yield put(setEntries(entries.val()))
    yield call(fetchGameAndDependents, group.game)
    yield call(syncGroup, null)
  } catch(errors) {
    console.log(errors)
  }
}

export function* syncEntries() {
  yield fork(sync, 'entries', {
    [CHILD_ADDED]: setEntry,
    [CHILD_CHANGED]: setEntry
  })
}

export function* syncGroup() {
  yield call(syncCategories, null);
  yield call(syncEntries, null);
}

export function* watchFetchGroup() {
  yield fork(takeLatest, FETCH_GROUP, fetchGroup)
}
