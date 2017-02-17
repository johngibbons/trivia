import {
  CREATE_GROUP_SUCCESS,
  SET_GROUP,
  SET_GROUP_ATTR
} from '../actions/action-types';
import { Map, fromJS } from 'immutable';

import Group from '../models/Group';

const groups = (state = new Map(), action) => {
  switch (action.type) {
  case CREATE_GROUP_SUCCESS: {
    const { id, group } = action.payload;
    return state.set(action.payload.id, new Group(fromJS({ id, ...group })))
  }
  case SET_GROUP_ATTR:
  case SET_GROUP: {
    const { group } = action.payload;
    return state.set(group.id, new Group(fromJS(group)))
  }
  default:
    return state;
  }
}

export default groups;
