import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD
} from './action-types';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    payload: { id }
  }
}

export function closeModal(id) {
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
