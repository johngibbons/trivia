import {
  CREATE_GAME_SUCCESS,
  SET_GAME,
  UPDATE_GAME,
  SAVE_PENDING_CATEGORY,
  DELETE_GAME,
} from "../actions/action-types";
import Game from "../models/Game";
import { fromJS, Map } from "immutable";

const games = (state = new Map(), action) => {
  switch (action.type) {
    case CREATE_GAME_SUCCESS:
      return state.set(
        action.payload.gameId,
        new Game(fromJS({ ...action.payload.game, id: action.payload.gameId }))
      );
    case SET_GAME: {
      const { game } = action.payload;
      return state.set(game.id, new Game(fromJS(game)));
    }
    case UPDATE_GAME:
      return state.mergeIn(action.payload.game.id, action.payload.game);
    case SAVE_PENDING_CATEGORY:
      return state.setIn(
        [
          action.payload.gameId,
          "categories",
          action.payload.pendingCategory.id,
        ],
        true
      );
    case DELETE_GAME:
      return state.delete(action.payload.id);
    default:
      return state;
  }
};

export default games;
