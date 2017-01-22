import {
  CREATE_NEW_GAME,
  UPDATE_PENDING_GAME,
  SAVE_PENDING_GAME
} from '../actions/action-types';

import { Game } from '../models/Game';

const initialState = new Game();

const pendingGame = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_NEW_GAME:
  case SAVE_PENDING_GAME:
    return initialState;
  case UPDATE_PENDING_GAME:
    return state.merge(action.payload.pending_game);
  default:
    return state;
  }
}

export default pendingGame;
