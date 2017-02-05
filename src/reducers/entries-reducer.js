import {
  SET_ENTRY
} from '../actions/action-types';
import { Map } from 'immutable'
import Entry from '../models/Entry';

const entries = (state = Map(), action) => {
  switch (action.type) {
  case SET_ENTRY: {
    const { entry } = action.payload;
    return state.set(entry.id, new Entry(entry));
  }
  default:
    return state;
  }
}

export default entries;
