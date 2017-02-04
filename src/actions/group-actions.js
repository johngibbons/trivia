import {
  CREATE_GROUP,
  CREATE_GROUP_SUCCESS,
  FETCH_GROUP
} from './action-types';

export function createGroup(name, game) {
  return {
    type: CREATE_GROUP,
    payload: {
      name,
      game
    }
  }
}

export function createGroupSuccess(id, name) {
  return {
    type: CREATE_GROUP_SUCCESS,
    payload: {
      id,
      name
    }
  }
}

export function fetchGroup(id) {
  return {
    type: FETCH_GROUP,
    payload: {
      id
    }
  }
}
