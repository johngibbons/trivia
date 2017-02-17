import {
  CREATE_GROUP,
  CREATE_GROUP_SUCCESS,
  FETCH_GROUP,
  SET_GROUP,
  SET_GROUP_ATTR
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

export function createGroupSuccess(id, group) {
  return {
    type: CREATE_GROUP_SUCCESS,
    payload: {
      id,
      group
    }
  }
}

export function setGroup(group) {
  return {
    type: SET_GROUP,
    payload: {
      group
    }
  }
}

export function setGroupAttr(response) {
  return {
    type: SET_GROUP_ATTR,
    payload: {
      group: response.value
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
