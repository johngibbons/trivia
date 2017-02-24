import {
  CREATE_NEW_CATEGORY,
  SAVE_PENDING_CATEGORY,
  CREATE_GAME,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GAME_NAME,
  UPDATE_NEW_GROUP_NAME,
  UPDATE_NEW_ENTRY_NAME,
  CREATE_GROUP_SUCCESS,
  SIGN_IN_SUCCESS,
  SAVE_GROUP_VALUES_SUCCESS,
  UPDATE_VALUE_FIELD,
} from '../actions/action-types';

import { UI } from '../models/UI';
import { Map } from 'immutable';

const ui = (state = new UI(), action) => {
  switch (action.type) {
  case CREATE_NEW_CATEGORY:
    return state.set('modal', 'NEW_CATEGORY');
  case OPEN_MODAL:
    return state.set('modal', action.payload.id);
  case CLOSE_MODAL:
  case CREATE_GAME:
  case SAVE_PENDING_CATEGORY:
  case SIGN_IN_SUCCESS:
    return state.delete('modal');
  case UPDATE_SEARCH_FIELD:
    return state.set('searchValue', action.payload.value);
  case UPDATE_NEW_GAME_NAME:
    return state.set('newGameName', action.payload.value);
  case UPDATE_NEW_GROUP_NAME:
    return state.set('newGroupName', action.payload.value);
  case UPDATE_NEW_ENTRY_NAME:
    return state.set('newEntryName', action.payload.value);
  case UPDATE_VALUE_FIELD:
    return state.setIn(['values', action.payload.categoryId], action.payload.value);
  case CREATE_GROUP_SUCCESS:
    return state.delete('modal')
      .set('values', new Map(action.payload.group.values))
  case SAVE_GROUP_VALUES_SUCCESS:
    return state.delete('modal')
      .mergeIn(['values'], new Map(action.payload.newValues))
  default:
    return state;
  }
}

export default ui;
