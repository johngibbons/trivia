import {
  CREATE_GROUP_SUCCESS
} from '../actions/action-types';
import { Map } from 'immutable';

import Group from '../models/Group';

const groups = (state = new Map(), action) => {
  switch (action.type) {
  case CREATE_GROUP_SUCCESS: {
    const { id, name } = action.payload;
    return state.set(action.payload.id, new Group({id, name}))
  }
  default:
    return state;
  }
}

export default groups;
