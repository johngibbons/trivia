import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  CHECK_AUTH_STATUS,
  SYNC_USER,
  SET_USER,
  SIGN_OUT,
  FETCH_USER,
  FETCH_OR_CREATE_USER,
} from "./action-types";

export function fetchUser(id) {
  return {
    type: FETCH_USER,
    payload: {
      id,
    },
  };
}

export function signInSuccess(currentUser) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      currentUser,
    },
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS,
  };
}

export function checkAuthStatus(next, requireAuth, nextState) {
  return {
    type: CHECK_AUTH_STATUS,
    payload: {
      next,
      requireAuth,
      nextState,
    },
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}

export function syncUser({ value }) {
  return {
    type: SYNC_USER,
    payload: {
      user: value,
    },
  };
}

export function fetchOrCreateUser(user) {
  return {
    type: FETCH_OR_CREATE_USER,
    payload: {
      user,
    },
  };
}
