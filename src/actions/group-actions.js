import {
  CREATE_GROUP,
  CREATE_GROUP_SUCCESS,
  FETCH_GROUP,
  FETCH_USER_GROUPS,
  SET_GROUP,
  SET_GROUP_ATTR,
  SAVE_GROUP_VALUES,
  SAVE_GROUP_VALUES_SUCCESS,
} from "./action-types";

export function createGroup(name, game) {
  return {
    type: CREATE_GROUP,
    payload: {
      name,
      game,
    },
  };
}

export function createGroupSuccess(id, group) {
  return {
    type: CREATE_GROUP_SUCCESS,
    payload: {
      id,
      group,
    },
  };
}

export function setGroup(group) {
  return {
    type: SET_GROUP,
    payload: {
      group,
    },
  };
}

export function setGroupAttr(response) {
  return {
    type: SET_GROUP_ATTR,
    payload: {
      group: response.value,
    },
  };
}

export function fetchGroup(id) {
  return {
    type: FETCH_GROUP,
    payload: {
      id,
    },
  };
}

export function fetchUserGroups(userId) {
  return {
    type: FETCH_USER_GROUPS,
    payload: {
      userId,
    },
  };
}

export function saveGroupValues(groupId) {
  return {
    type: SAVE_GROUP_VALUES,
    payload: {
      groupId,
    },
  };
}

export function saveGroupValuesSuccess(groupId, newValues) {
  return {
    type: SAVE_GROUP_VALUES_SUCCESS,
    payload: {
      groupId,
      newValues,
    },
  };
}
