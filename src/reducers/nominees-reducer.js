import { Map } from "immutable";
import Nominee from "../models/Nominee";

import { SAVE_PENDING_CATEGORY, SET_NOMINEES } from "../actions/action-types";

const nominees = (state = new Map(), action) => {
  switch (action.type) {
    case SAVE_PENDING_CATEGORY:
      return action.payload.pendingCategory.nominees.reduce(
        (acc, nominee) => acc.set(nominee.id, new Nominee(nominee)),
        state
      );
    case SET_NOMINEES: {
      const { nominees } = action.payload;
      return new Map(nominees).map((val) => new Nominee(val));
    }
    default:
      return state;
  }
};

export default nominees;
