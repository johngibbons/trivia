import { SAVE_PENDING_CATEGORY } from "../actions/action-types";

import Game from "../models/Game";
import Category from "../models/Category";

const pendingGame = (state = new Game(), action) => {
  switch (action.type) {
    case SAVE_PENDING_CATEGORY: {
      const { pendingCategory } = action.payload;
      return state.setIn(
        ["categories", pendingCategory.id],
        new Category(pendingCategory)
      );
    }
    default:
      return state;
  }
};

export default pendingGame;
