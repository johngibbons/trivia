import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from "../actions/action-types";

import User from "../models/User";

const currentUser = (state = new User(), action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      const { uid, displayName, email, photoURL } = action.payload.currentUser;
      return state.merge({
        id: uid,
        name: displayName,
        email,
        photoURL,
      });
    }
    case SIGN_OUT_SUCCESS:
      return new User();
    default:
      return state;
  }
};

export default currentUser;
