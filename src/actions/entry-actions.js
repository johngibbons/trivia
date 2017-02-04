import {
  UPDATE_ENTRY
} from './action-types';

export function updateEntry(entry) {
  return {
    type: UPDATE_ENTRY,
    payload: {
      entry
    }
  }
}
