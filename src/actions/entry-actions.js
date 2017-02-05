import {
  CREATE_ENTRY,
  UPDATE_ENTRY,
  FETCH_ENTRY,
  SET_ENTRY
} from './action-types';

export function createEntry(name, group, user) {
  return {
    type: CREATE_ENTRY,
    payload: {
      name,
      group,
      user
    }
  }
}

export function fetchEntry(id) {
  return {
    type: FETCH_ENTRY,
    payload: {
      id
    }
  }
}

export function setEntry(entry) {
  return {
    type: SET_ENTRY,
    payload: {
      entry
    }
  }
}

export function updateEntry(entry) {
  return {
    type: UPDATE_ENTRY,
    payload: {
      entry
    }
  }
}
