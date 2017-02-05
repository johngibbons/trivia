import {
  CREATE_NEW_QUESTION,
  SAVE_PENDING_QUESTION,
  CREATE_GAME,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GROUP_NAME,
  CREATE_GROUP_SUCCESS,
  SIGN_IN_SUCCESS
} from '../actions/action-types';

import { UI } from '../models/UI';

const ui = (state = new UI(), action) => {
  switch (action.type) {
  case CREATE_NEW_QUESTION:
    return state.set('modal', 'NEW_QUESTION');
  case OPEN_MODAL:
    return state.set('modal', action.payload.id);
  case CLOSE_MODAL:
  case CREATE_GAME:
  case SAVE_PENDING_QUESTION:
  case CREATE_GROUP_SUCCESS:
  case SIGN_IN_SUCCESS:
    return state.delete('modal');
  case UPDATE_SEARCH_FIELD:
    return state.set('searchValue', action.payload.value);
  case UPDATE_NEW_GROUP_NAME:
    return state.set('newGroupName', action.payload.value);
  default:
    return state;
  }
}

export default ui;
