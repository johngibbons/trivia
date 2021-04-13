import { watchCreateEntry, createEntry } from "./entrySaga";

import { CREATE_ENTRY } from "../actions/action-types";
import * as actions from "../actions/entry-actions";

import { fork, takeLatest, call, put } from "redux-saga/effects";
import Entry from "../models/Entry";
import User from "../models/User";
import API from "../api";
import { push } from "react-router-redux";

describe("entry saga", () => {
  it("should watch for entry create", () => {
    const generator = watchCreateEntry();
    expect(generator.next().value).toEqual(
      fork(takeLatest, CREATE_ENTRY, createEntry)
    );
  });

  it("should create entry", () => {
    const entry = new Entry({ name: "My entry" });
    const groupId = 1;
    const currentUser = new User({ name: "John", id: 1 });
    const action = actions.createEntry(entry, groupId, currentUser);
    const generator = createEntry(action);
    expect(generator.next().value).toEqual(call(API.createEntryId, null));
    const newEntryId = "abc";
    expect(generator.next(newEntryId).value).toEqual(
      call(API.createEntry, newEntryId, action.payload)
    );
    expect(generator.next().value).toEqual(put(push(`/entries/${newEntryId}`)));
  });
});
