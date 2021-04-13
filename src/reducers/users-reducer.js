import { SYNC_USER, SET_USER } from "../actions/action-types";

import { Map, fromJS } from "immutable";
import User from "../models/User";

const users = (state = Map(), action) => {
  switch (action.type) {
    case SET_USER:
    case SYNC_USER: {
      const { user } = action.payload;
      const usersWithSet = new Map().set(user.id, new User(fromJS(user)));
      return state.mergeDeep(usersWithSet);
    }
    default:
      return state;
  }
};

export default users;
