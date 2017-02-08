import {
  SAVE_PENDING_CATEGORY
} from '../actions/action-types'
import { Map } from 'immutable';
import Category from '../models/Category';

const categories = (state = new Map(), action) => {
  switch (action.type) {
  case SAVE_PENDING_CATEGORY: {
    const { pendingCategory } = action.payload;
    const newState = state.set(
      pendingCategory.id,
      new Category({
        id: pendingCategory.id,
        nominees: pendingCategory.nominees.map(() => true)
      })
    )
    return newState;
  }
  default:
    return state;
  }
}

export default categories;
