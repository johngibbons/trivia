import {
  SET_CATEGORIES,
  SET_CATEGORY,
  SELECT_CORRECT_NOMINEE
} from './action-types';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories }
  }
}

export function setCategory({ value }) {
  return {
    type: SET_CATEGORY,
    payload: { category: value }
  }
}

export function selectCorrectNominee(nominee) {
  return {
    type: SELECT_CORRECT_NOMINEE,
    payload: { nominee }
  }
}
