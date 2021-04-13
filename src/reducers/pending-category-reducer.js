import {
  CREATE_NEW_CATEGORY,
  UPDATE_PENDING_CATEGORY,
  SAVE_PENDING_CATEGORY,
  SAVE_PENDING_NOMINEE,
  DELETE_NOMINEE,
} from "../actions/action-types";

import Category from "../models/Category";
import Nominee from "../models/Nominee";

const initialState = new Category();

const pendingCategory = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CATEGORY:
    case SAVE_PENDING_CATEGORY:
      return initialState;
    case UPDATE_PENDING_CATEGORY:
      return state.merge(action.payload.pendingCategory);
    case SAVE_PENDING_NOMINEE: {
      const { nominee } = action.payload;
      return state.setIn(["nominees", nominee.id], new Nominee(nominee));
    }
    case DELETE_NOMINEE:
      return state.deleteIn(["nominees", action.payload.nominee.id]);
    default:
      return state;
  }
};

export default pendingCategory;
