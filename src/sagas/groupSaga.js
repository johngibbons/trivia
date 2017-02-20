import { call, put, takeLatest, fork, select } from 'redux-saga/effects';
import {
  CREATE_GROUP,
  FETCH_GROUP,
  FETCH_USER_GROUPS
} from '../actions/action-types';
import {
  createGroupSuccess,
  setGroup,
  setGroupAttr
} from '../actions/group-actions';
import {
  syncEntry
} from '../actions/entry-actions';
import {
  syncUser
} from '../actions/user-actions';
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
  CHILD_ADDED,
  CHILD_REMOVED
} from './firebase-saga';

export function* createGroup(action) {
  try {
    const currentUser = yield select(currentUserSelector);
    const newGroupId = yield call(API.createGroupId, null)
    yield call(API.createGroup, newGroupId, action.payload, currentUser)
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
    yield put(setGroup(group));
    yield call(fetchGameAndDependents, group.game)
    yield call(syncGroupAndDependents, null)
  } catch(errors) {
    console.log(errors)
  }
}

export function* syncGroup() {
  yield fork(sync, `groups`, {
    [CHILD_ADDED]: setGroupAttr,
    [CHILD_CHANGED]: setGroupAttr,
    [CHILD_REMOVED]: setGroupAttr
  })
}

export function* syncEntries() {
  yield fork(sync, 'entries', {
    [CHILD_ADDED]: syncEntry,
    [CHILD_CHANGED]: syncEntry
  })
}

export function* syncUsers() {
  yield fork(sync, 'users', {
    [CHILD_ADDED]: syncUser
  })
}

export function* syncGroupAndDependents() {
  yield fork(syncGroup, null);
  yield fork(syncCategories, null);
  yield fork(syncEntries, null);
  yield fork(syncUsers, null);
}

export function* watchFetchGroup() {
  yield fork(takeLatest, FETCH_GROUP, fetchGroup)
}
