import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GAME_NAME,
  UPDATE_NEW_GROUP_NAME,
  UPDATE_NEW_ENTRY_NAME,
  UPDATE_VALUE_FIELD,
  SET_NEXT_LOCATION,
  SHOW_ALERT_BAR,
  HIDE_ALERT_BAR,
} from "./action-types";

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    payload: { id },
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function updateSearchField(value) {
  return {
    type: UPDATE_SEARCH_FIELD,
    payload: {
      value,
    },
  };
}

export function updateNewGameName(value) {
  return {
    type: UPDATE_NEW_GAME_NAME,
    payload: {
      value,
    },
  };
}

export function updateNewGroupName(value) {
  return {
    type: UPDATE_NEW_GROUP_NAME,
    payload: {
      value,
    },
  };
}

export function updateNewEntryName(value) {
  return {
    type: UPDATE_NEW_ENTRY_NAME,
    payload: {
      value,
    },
  };
}

export function updateValueField(categoryId, value) {
  return {
    type: UPDATE_VALUE_FIELD,
    payload: {
      categoryId,
      value,
    },
  };
}

export function setNextLocation(nextLocation) {
  return {
    type: SET_NEXT_LOCATION,
    payload: {
      nextLocation,
    },
  };
}

export function showAlertBar(message, isError) {
  return {
    type: SHOW_ALERT_BAR,
    payload: {
      message,
      isError,
    },
  };
}

export function hideAlertBar() {
  return {
    type: HIDE_ALERT_BAR,
  };
}
