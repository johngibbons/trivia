import {
  SET_CATEGORIES
} from './action-types';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories }
  }
}
