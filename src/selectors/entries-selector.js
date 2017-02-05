import { createSelector } from 'reselect';
import { Seq } from 'immutable';
import { currentGroupSelector } from './group-selector';

export const entriesSelector = state => state.entries;

export const groupEntriesSelector = createSelector(
  entriesSelector,
  currentGroupSelector,
  (entries, group) => group && group.entries ?
    group.entries.keySeq().map((key) => entries.get(key)) :
    new Seq()
);

export const currentEntrySelector = (state, props) =>
  state.entries.get(props.params.id)
