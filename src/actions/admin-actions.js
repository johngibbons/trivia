import {
  SUBMIT_SEARCH,
  SUBMIT_SEARCH_SUCCESS,
  SUBMIT_SEARCH_FAILURE,
  SAVE_TITLE,
  SAVE_PERSON,
} from "./action-types";

export function submitSearch(value) {
  return {
    type: SUBMIT_SEARCH,
    payload: {
      value,
    },
  };
}

export function submitSearchSuccess(response) {
  return {
    type: SUBMIT_SEARCH_SUCCESS,
    payload: {
      response,
    },
  };
}

export function submitSearchFailure(errors) {
  return {
    type: SUBMIT_SEARCH_FAILURE,
    payload: {
      errors,
    },
  };
}

export function saveTitle(title) {
  return {
    type: SAVE_TITLE,
    payload: {
      title,
    },
  };
}

export function savePerson(person) {
  return {
    type: SAVE_PERSON,
    payload: {
      person,
    },
  };
}
