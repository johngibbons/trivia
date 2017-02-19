import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  CHECK_AUTH_STATUS,
  SYNC_USER
} from './action-types';

export function signInSuccess(currentUser) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      currentUser
    }
  }
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  }
}

export function checkAuthStatus(next, requireAuth) {
  return {
    type: CHECK_AUTH_STATUS,
    payload: {
      next,
      requireAuth
    }
  }
}

export function syncUser({ value }) {
  return {
    type: SYNC_USER,
    payload: {
      user: value
    }
  }
}
