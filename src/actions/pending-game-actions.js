import {
  CREATE_NEW_GAME,
  UPDATE_PENDING_GAME,
  SAVE_PENDING_GAME,
  CREATE_NEW_CATEGORY,
  UPDATE_PENDING_CATEGORY,
  SAVE_PENDING_CATEGORY,
  UPDATE_PENDING_NOMINEE,
  SAVE_PENDING_NOMINEE,
  DELETE_NOMINEE
} from './action-types';

export function createNewGame(id) {
  return {
    type: CREATE_NEW_GAME,
    payload: { id }
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

export function createNewCategory() {
  return {
    type: CREATE_NEW_CATEGORY
  }
}

export function updatePendingCategory(pending_category) {
  return {
    type: UPDATE_PENDING_CATEGORY,
    payload: {
      pending_category
    }
  }
}

export function savePendingCategory(pending_category, gameId) {
  return {
    type: SAVE_PENDING_CATEGORY,
    payload: {
      pending_category,
      gameId
    }
  }
}

export function updatePendingNominee(pending_nominee) {
  return {
    type: UPDATE_PENDING_NOMINEE,
    payload: {
      pending_nominee
    }
  }
}

export function savePendingNominee(nominee) {
  return {
    type: SAVE_PENDING_NOMINEE,
    payload: {
      nominee
    }
  }
}

export function deleteNominee(index) {
  return {
    type: DELETE_NOMINEE,
    payload: {
      index
    }
  }
}
