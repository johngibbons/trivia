import {
  CREATE_NEW_GAME,
  UPDATE_PENDING_GAME,
  SAVE_PENDING_QUESTION,
  SAVE_PENDING_GAME
} from '../actions/action-types';

import { Game } from '../models/Game';

const initialState = new Game();
const devInitialState = new Game({id: 'a'})

const pendingGame = (state = devInitialState, action) => {
  switch (action.type) {
  case CREATE_NEW_GAME:
    return initialState.set('id', action.payload.id)
  case SAVE_PENDING_GAME:
    return initialState;
  case SAVE_PENDING_QUESTION:
    return state.set(
      'questions',
      state.get('questions').push(action.payload.pending_question)
    );
  case UPDATE_PENDING_GAME:
    return state.merge(action.payload.pending_game);
  default:
    return state;
  }
}

export default pendingGame;
