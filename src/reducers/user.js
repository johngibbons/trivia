import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

import {
  LOG_IN_USER
} from '../constants';

const usersById = (state = {}, action) => {
  switch(action.type) {

  case LOG_IN_USER: {
    return addOrUpdateItem(state, action.payload);
  }

  default:
    return state;
  }
};

export default usersById;
