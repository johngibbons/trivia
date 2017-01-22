import {
  CREATE_GAME,
  UPDATE_GAME
} from './action-types.js';

export function createGame(game) {
  return {
    type: CREATE_GAME,
    payload: { game }
  }
}

export function updateGame(game) {
  return {
    type: UPDATE_GAME,
    payload: { game }
  }
}
