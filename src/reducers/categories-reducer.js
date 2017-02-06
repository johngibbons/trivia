import {
  SAVE_PENDING_CATEGORY
} from '../actions/action-types'
import { Map } from 'immutable';

const categories = (state = new Map(), action) => {
  switch (action.type) {
  case SAVE_PENDING_CATEGORY: {
    const { pendingCategory } = action.payload;
    console.log(pendingCategory);
    const newState = state.setIn([
      pendingCategory.id,
      'nominees'
    ], nominees => nominees.map(nominee => nominee.id))
    return newState;
  }
  default:
    return state;
  }
}

export default categories;
