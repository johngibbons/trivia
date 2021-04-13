import {
  searchSubmit,
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson,
  saveTitle,
  savePerson,
} from "./adminSaga";

import {
  SUBMIT_SEARCH,
  SAVE_TITLE,
  SAVE_PERSON,
} from "../actions/action-types";
import * as actions from "../actions/admin-actions";

import { call, put, fork, takeLatest } from "redux-saga/effects";

import MovieDB from "../moviedb";
import API from "../api";

describe("admin saga", () => {
  it("should call searchSubmit on sumbit search", () => {
    const generator = watchSearchSubmit();
    expect(generator.next().value).toEqual(
      fork(takeLatest, SUBMIT_SEARCH, searchSubmit)
    );
  });

  it("should call MovieDB and handle response", () => {
    const action = actions.submitSearch("Brad Pitt");
    const generator = searchSubmit(action);
    expect(generator.next().value).toEqual(
      call(MovieDB.searchMulti, action.payload.value)
    );
    const response = [{ id: 1, name: "Brad Pitt" }];
    expect(generator.next(response).value).toEqual(
      put(actions.submitSearchSuccess(response))
    );
  });

  it("should watch for save title", () => {
    const generator = watchSaveTitle();
    expect(generator.next().value).toEqual(
      fork(takeLatest, SAVE_TITLE, saveTitle)
    );
  });

  it("should save title to firebase", () => {
    const action = actions.saveTitle({ name: "Title Name" });
    const generator = saveTitle(action);
    expect(generator.next().value).toEqual(
      call(API.saveTitle, action.payload.title)
    );
  });

  it("should watch for save person", () => {
    const generator = watchSavePerson();
    expect(generator.next().value).toEqual(
      fork(takeLatest, SAVE_PERSON, savePerson)
    );
  });
});
