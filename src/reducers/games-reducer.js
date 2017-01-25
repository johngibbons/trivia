import { Map } from 'immutable'
import {
  CREATE_GAME,
  UPDATE_GAME,
  SAVE_PENDING_QUESTION,
  DELETE_GAME
} from '../actions/action-types';
import { Game } from '../models/Game';
import devInitialState from './devStates/games';

const games = (state = devInitialState, action) => {
  switch (action.type) {
  case CREATE_GAME:
    return state.set(action.payload.game.id, new Game(action.payload.game));
  case UPDATE_GAME:
    return state.mergeIn(action.payload.game.id, action.payload.game);
  case SAVE_PENDING_QUESTION:
    return state.updateIn([action.payload.gameId, 'questions'], questions => questions.push(action.payload.pending_question.id));
  case DELETE_GAME:
    return state.delete(action.payload.id);
  default:
    return state;
  }
}

export default games;
