import {
  SUBMIT_SEARCH,
  SAVE_TITLE,
  SAVE_PERSON,
} from "../actions/action-types";
import {
  submitSearchSuccess,
  submitSearchFailure,
} from "../actions/admin-actions";
import { showAlertBar } from "../actions/ui-actions";
import MovieDB from "../moviedb";
import API from "../api";

import { call, put, fork, takeLatest } from "redux-saga/effects";

export function* searchSubmit(action) {
  try {
    const response = yield call(MovieDB.searchMulti, action.payload.value);
    yield put(submitSearchSuccess(response));
  } catch (errors) {
    yield put(submitSearchFailure(errors));
  }
}

export function* watchSearchSubmit() {
  yield fork(takeLatest, SUBMIT_SEARCH, searchSubmit);
}

export function* saveTitle(action) {
  try {
    yield call(API.saveTitle, action.payload.title);
    yield put(showAlertBar(`Title saved`));
    console.log(action.payload.title.toJS());
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchSaveTitle() {
  yield fork(takeLatest, SAVE_TITLE, saveTitle);
}

export function* savePerson(action) {
  try {
    yield call(API.savePerson, action.payload.person);
    yield put(showAlertBar(`Person saved`));
    console.log(action.payload.person.toJS());
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchSavePerson() {
  yield fork(takeLatest, SAVE_PERSON, savePerson);
}
