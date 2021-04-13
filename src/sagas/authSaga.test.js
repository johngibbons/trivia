import {
  watchCheckAuthStatus,
  checkAuthStatus,
  getCurrentUser,
} from "./authSaga";

import { replace } from "react-router-redux";

import { CHECK_AUTH_STATUS } from "../actions/action-types";
import * as actions from "../actions/user-actions";
import { signInSuccess, signOutSuccess } from "../actions/user-actions";

import { call, put, fork, takeLatest } from "redux-saga/effects";

describe("auth saga", () => {
  it("should call check auth status", () => {
    const generator = watchCheckAuthStatus();
    let next = generator.next();
    expect(next.value).toEqual(
      fork(takeLatest, CHECK_AUTH_STATUS, checkAuthStatus)
    );
  });

  it("should dispatch proper auth status actions if user", () => {
    const action = actions.checkAuthStatus(() => {}, false);
    const generator = checkAuthStatus(action);
    let next = generator.next();
    expect(next.value).toEqual(call(getCurrentUser, null));
    const user = { id: 1, displayName: "John Gibbons" };
    next = generator.next(user);
    expect(next.value).toEqual(put(signInSuccess(user)));
    expect(generator.next().value).toEqual(call(action.payload.next, null));
  });

  it("should dispatch proper auth status actions if no user", () => {
    const action = actions.checkAuthStatus(() => {}, true);
    const generator = checkAuthStatus(action);
    let next = generator.next();
    expect(next.value).toEqual(call(getCurrentUser, null));
    next = generator.next(undefined);
    expect(next.value).toEqual(put(signOutSuccess()));
    next = generator.next();
    expect(next.value).toEqual(put(replace("/")));
  });
});
