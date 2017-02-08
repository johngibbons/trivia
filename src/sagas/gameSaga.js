import { takeLatest, fork, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  CREATE_GAME,
  FETCH_GAME
} from '../actions/action-types';
import {
  createGameSuccess,
  setGame
} from '../actions/game-actions';
import API from '../api';
import { push } from 'react-router-redux';
import { database } from 'firebase';

export function* createGame(action) {
  const newGameId = yield call(API.createGameId, null)
  yield call(API.createGame, newGameId, action.payload)
  yield put(createGameSuccess(newGameId, action.payload))
  yield put(push(`/games/${newGameId}/edit`))
}

export function* watchCreateGame() {
  yield fork(takeLatest, CREATE_GAME, createGame)
}

export function subscribe(database, gameId) {
  return eventChannel(emit => {
    database().ref().off();
    database().ref(`/games/${gameId}`).once('value', snapshot => {
      emit(setGame(snapshot.val()));
    })
    return () => {};
  })
}

export function* fetchGame(action) {
  const channel = yield call(subscribe, database, action.payload.id)
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* watchFetchGame() {
  yield fork(takeLatest, FETCH_GAME, fetchGame)
}
