import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GAME_NAME,
  UPDATE_NEW_GROUP_NAME,
  UPDATE_NEW_ENTRY_NAME
} from './action-types';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    payload: { id }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function updateSearchField(value) {
  return {
    type: UPDATE_SEARCH_FIELD,
    payload: {
      value
    }
  }
}

export function updateNewGameName(value) {
  return {
    type: UPDATE_NEW_GAME_NAME,
    payload: {
      value
    }
  }
}

export function updateNewGroupName(value) {
  return {
    type: UPDATE_NEW_GROUP_NAME,
    payload: {
      value
    }
  }
}

export function updateNewEntryName(value) {
  return {
    type: UPDATE_NEW_ENTRY_NAME,
    payload: {
      value
    }
  }
}
