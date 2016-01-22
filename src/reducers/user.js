import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

import {
  LOG_IN_USER,
  UPDATE_USER,
  ADD_GAME,
  ADD_ENTRY,
  REMOVE_ENTRY
} from '../constants';

const usersById = (state = {}, action) => {
  switch(action.type) {

  case LOG_IN_USER: {
    return addOrUpdateItem(state, action.payload);
  }

  case UPDATE_USER: {
    return addOrUpdateItem(state, action.payload);
  }

  case ADD_GAME: {
    return addReferenceItem(state, action.payload, 'user', 'games');
  }

  case ADD_ENTRY: {
    return addReferenceItem(state, action.payload, 'user', 'entries');
  }

  case REMOVE_ENTRY: {
    return removeReferenceItem(state, action.payload, 'user', 'entries');
  }

  default:
    return state;
  }
};

export default usersById;
