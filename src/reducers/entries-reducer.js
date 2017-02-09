import {
  SET_ENTRY,
  SELECT_NOMINEE
} from '../actions/action-types';
import { Map, fromJS } from 'immutable'
import Entry from '../models/Entry';

const entries = (state = Map(), action) => {
  switch (action.type) {
  case SET_ENTRY: {
    const { entry } = action.payload;
    return state.set(entry.id, new Entry(fromJS(entry)));
  }
  case SELECT_NOMINEE: {
    const { entryId, nominee } = action.payload;
    return state.get(entryId) ?
      state.setIn([entryId, 'selections', nominee.category], nominee.id) :
      state.set(entryId, new Entry({
        selections: new Map().set(nominee.category, nominee.id)
      }))
  }
  default:
    return state;
  }
}

export default entries;
