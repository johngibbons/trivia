import { eventChannel } from 'redux-saga';
import { call, put, take, takeLatest, fork, select } from 'redux-saga/effects';
import {
  CREATE_GROUP,
  FETCH_GROUP
} from '../actions/action-types';
import {
  updateCategory
} from '../actions/game-actions';
import {
  createGroupSuccess,
  setGroup
} from '../actions/group-actions';
import {
  setEntry
} from '../actions/entry-actions';
import { database } from 'firebase';
import API from '../api';
import { currentUserSelector } from '../selectors/current-user-selector';
import { push } from 'react-router-redux';

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

export function subscribe(database, groupId) {
  return eventChannel(emit => {
    database().ref().off()
    database().ref(`/groups/${groupId}`).on('value', snapshot => {
      const gameId = snapshot.val().game;
      emit(setGroup(groupId, snapshot.val()));
      database().ref(`/games/${gameId}/categories`).on('child_changed', data => {
        emit(updateCategory(gameId, data.key, data.val()))
      })
      database().ref(`/groups/${groupId}/entries`).on('child_added', data => {
        database().ref(`/entries/${data.key}`).on('value', snapshot => {
          emit(setEntry(snapshot.val()));
        })
      })
    })
    return () => {};
  })
}

export function* fetchGroup(action) {
  const channel = yield call(subscribe, database, action.payload.id);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* watchFetchGroup() {
  yield fork(takeLatest, FETCH_GROUP, fetchGroup)
}
