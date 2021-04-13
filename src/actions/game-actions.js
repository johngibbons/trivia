import {
  CREATE_GAME,
  CREATE_GAME_SUCCESS,
  UPDATE_GAME,
  FETCH_GAME,
  SET_GAME,
} from "./action-types";

export function createGame(name) {
  return {
    type: CREATE_GAME,
    payload: {
      name,
    },
  };
}

export function createGameSuccess(gameId, game) {
  return {
    type: CREATE_GAME_SUCCESS,
    payload: {
      gameId,
      game,
    },
  };
}

export function updateGame(game) {
  return {
    type: UPDATE_GAME,
    payload: { game },
  };
}

export function fetchGame(id) {
  return {
    type: FETCH_GAME,
    payload: { id },
  };
}

export function setGame(game) {
  return {
    type: SET_GAME,
    payload: { game },
  };
}
