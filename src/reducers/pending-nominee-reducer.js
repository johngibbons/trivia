import {
  UPDATE_PENDING_NOMINEE,
  SAVE_PENDING_NOMINEE,
} from "../actions/action-types";

import Nominee from "../models/Nominee";

const initialState = new Nominee();

const pendingNominee = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PENDING_NOMINEE:
      return state.merge(action.payload.pendingNominee);
    case SAVE_PENDING_NOMINEE:
      return initialState;
    default:
      return state;
  }
};

export default pendingNominee;
