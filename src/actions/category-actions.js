import {
  SET_CATEGORIES,
  SET_CATEGORY
} from './action-types';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories }
  }
}

export function setCategory({key, value}) {
  return {
    type: SET_CATEGORY,
    payload: { category: value }
  }
}
