import {
  CREATE_NEW_CATEGORY,
  UPDATE_PENDING_CATEGORY,
  SAVE_PENDING_CATEGORY,
  UPDATE_PENDING_NOMINEE,
  SAVE_PENDING_NOMINEE,
  DELETE_NOMINEE,
} from "./action-types";

export function createNewCategory() {
  return {
    type: CREATE_NEW_CATEGORY,
  };
}

export function updatePendingCategory(pendingCategory) {
  return {
    type: UPDATE_PENDING_CATEGORY,
    payload: {
      pendingCategory,
    },
  };
}

export function savePendingCategory(pendingCategory, gameId) {
  return {
    type: SAVE_PENDING_CATEGORY,
    payload: {
      pendingCategory,
      gameId,
    },
  };
}

export function updatePendingNominee(pendingNominee) {
  return {
    type: UPDATE_PENDING_NOMINEE,
    payload: {
      pendingNominee,
    },
  };
}

export function savePendingNominee(nominee) {
  return {
    type: SAVE_PENDING_NOMINEE,
    payload: {
      nominee,
    },
  };
}

export function deleteNominee(nominee) {
  return {
    type: DELETE_NOMINEE,
    payload: {
      nominee,
    },
  };
}
