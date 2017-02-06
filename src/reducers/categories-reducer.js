import Category from '../models/Category';
import {
  SAVE_PENDING_CATEGORY
} from '../actions/action-types'
import { Map } from 'immutable';

const categories = (state = new Map(), action) => {
  switch (action.type) {
  case SAVE_PENDING_CATEGORY: {
    const newState = state.set(action.payload.pending_category.id, action.payload.pending_category.update('nominees', nominees => nominees.map(nominee => nominee.id)))
    return newState;
  }
  default:
    return state;
  }
}

export default categories;
