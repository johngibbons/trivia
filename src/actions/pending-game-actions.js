import {
  CREATE_NEW_GAME,
  UPDATE_PENDING_GAME,
  SAVE_PENDING_GAME
} from './action-types';

export function createNewGame() {
  return {
    type: CREATE_NEW_GAME
  }
}

export function updatePendingGame(pending_game) {
  return {
    type: UPDATE_PENDING_GAME,
    payload: {
      pending_game
    }
  }
}

export function savePendingGame(pending_game) {
  return {
    type: SAVE_PENDING_GAME,
    payload: {
      pending_game
    }
  }
}
