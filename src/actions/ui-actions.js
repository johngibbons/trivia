import {
  OPEN_MODAL,
  CLOSE_MODAL
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
