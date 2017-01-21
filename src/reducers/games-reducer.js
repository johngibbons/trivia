import { Map } from 'immutable'
import {
  CREATE_GAME,
  UPDATE_GAME,
  DELETE_GAME
} from '../actions/action-types';
import { Game } from '../models/Game';

const games = (state = Map(), action) => {
  switch (action.type) {
  case CREATE_GAME:
    return state.set(action.payload.game.id, new Game(action.payload.game));
  case UPDATE_GAME:
    return state.mergeIn(action.payload.game.id, action.payload.game);
  case DELETE_GAME:
    return state.delete(action.payload.id);
  default:
    return state;
  }
}

export default games;
