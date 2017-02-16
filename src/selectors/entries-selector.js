import { createSelector } from 'reselect';
import { currentGroupSelector } from './group-selector';
import { Seq } from 'immutable';
import Entry from '../models/Entry';

export const entriesSelector = state => state.entries;

export const groupEntriesSelector = createSelector(
  entriesSelector,
  currentGroupSelector,
  (entries, group) => group ?
    group.entries.keySeq().map(key => entries.get(key) ?
      entries.get(key) : new Entry()) :
      new Seq()
);

export const currentEntrySelector = (state, props) => {
  if (props.entry && props.entry.id) {
    return state.entries.get(props.entry.id) || new Entry();
  } else if (props.routeParams) {
    return state.entries.get(props.routeParams.id) || new Entry();
  } else {
    return new Entry();
  }
}
