import {
  SIGN_IN_SUCCESS
} from './action-types';

export function signInSuccess(currentUser) {
  console.log(currentUser);
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      currentUser
    }
  }
}
