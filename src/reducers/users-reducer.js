import {
  SYNC_USER
} from '../actions/action-types';

import { Map, fromJS } from 'immutable'
import User from '../models/User';

const users = (state = Map(), action) => {
  switch (action.type) {
  case SYNC_USER: {
    const { user } = action.payload;
    console.log(user)
    return state.set(user.id, new User(fromJS(user)));
  }
  default:
    return state;
  }
}

export default users;
