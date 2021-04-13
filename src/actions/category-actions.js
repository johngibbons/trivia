import {
  SET_CATEGORIES,
  SET_CATEGORY,
  TOGGLE_CORRECT_NOMINEE,
} from "./action-types";

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories },
  };
}

export function setCategory({ value }) {
  return {
    type: SET_CATEGORY,
    payload: { category: value },
  };
}

export function toggleCorrectNominee(nominee) {
  return {
    type: TOGGLE_CORRECT_NOMINEE,
    payload: { nominee },
  };
}
