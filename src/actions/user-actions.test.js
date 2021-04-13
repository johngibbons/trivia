import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  CHECK_AUTH_STATUS,
} from "./action-types";

import { signInSuccess, signOutSuccess, checkAuthStatus } from "./user-actions";

describe("user actions", () => {
  it("should return sign in success action", () => {
    const currentUser = {
      id: "xpfjieo",
      displayName: "John Gibbons",
      email: "johngibbons10@gmail.com",
      photoURL: "john.jpeg",
    };

    const expectedAction = {
      type: SIGN_IN_SUCCESS,
      payload: {
        currentUser,
      },
    };

    expect(signInSuccess(currentUser)).toEqual(expectedAction);
  });

  it("should return sign out success action", () => {
    const expectedAction = {
      type: SIGN_OUT_SUCCESS,
    };

    expect(signOutSuccess()).toEqual(expectedAction);
  });

  it("should return check auth status action", () => {
    const next = () => {};
    const requireAuth = true;

    const expectedAction = {
      type: CHECK_AUTH_STATUS,
      payload: {
        next,
        requireAuth,
      },
    };

    expect(checkAuthStatus(next, requireAuth)).toEqual(expectedAction);
  });
});
