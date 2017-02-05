import { createSelector } from 'reselect';
import { currentGroupSelector } from './group-selector';
import { Seq } from 'immutable';
import Entry from '../models/Entry';

export const entriesSelector = state => state.entries;

export const groupEntriesSelector = createSelector(
  entriesSelector,
  currentGroupSelector,
  (entries, group) => group ?
    group.entries.keySeq().map((key) => entries.get(key) ?
      entries.get(key) : new Entry()) :
      new Seq()
);

export const currentEntrySelector = (state, props) =>
  state.entries.get(props.params.id) || new Entry()
