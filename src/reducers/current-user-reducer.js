import {
  SIGN_IN_SUCCESS
} from '../actions/action-types'

import { User } from '../models/User';

const currentUser = (state = new User(), action) => {
  switch (action.type) {
  case SIGN_IN_SUCCESS:
    const {
      displayName,
      email,
      photoURL
    } = action.payload.currentUser;
    return state.merge({
      name: displayName,
      email,
      photoURL
    });
  default:
    return state;
  }
}

export default currentUser;
