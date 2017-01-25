import {
  SUBMIT_SEARCH,
  SUBMIT_SEARCH_SUCCESS,
  SUBMIT_SEARCH_FAILURE
} from './action-types';

export function submitSearch(value) {
  return {
    type: SUBMIT_SEARCH,
    payload: {
      value
    }
  }
}

export function submitSearchSuccess(response) {
  return {
    type: SUBMIT_SEARCH_SUCCESS,
    payload: {
      response
    }
  }
}

export function submitSearchFailure(errors) {
  return {
    type: SUBMIT_SEARCH_FAILURE,
    payload: {
      errors
    }
  }
}
