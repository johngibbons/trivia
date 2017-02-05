import {
  CREATE_GROUP_SUCCESS,
  SET_GROUP
} from '../actions/action-types';
import { Map } from 'immutable';

import Group from '../models/Group';

const groups = (state = new Map(), action) => {
  switch (action.type) {
  case CREATE_GROUP_SUCCESS:
  case SET_GROUP: {
    const { id, group } = action.payload;
    return state.set(action.payload.id, new Group({id, ...group}))
  }
  default:
    return state;
  }
}

export default groups;
