import {
  entriesSelector,
  groupEntriesSelector,
  currentEntrySelector
} from './entries-selector';
import { Map, Seq } from 'immutable';
import Entry from '../models/Entry';
import Group from '../models/Group';
import store from '../store';
import { is } from 'immutable';

describe('entries selector', () => {
  it('should select all entries', () => {
    const entries = new Map({
      1: new Entry({
        name: 'Some Entry'
      }),
      2: new Entry({
        name: 'Another Entry'
      })
    })

    const state = {...store.getState(), entries};

    expect(entriesSelector(state)).toEqual(entries);
  })

  it('should select the entries from a group', () => {
    const groupEntries = new Map()
      .set(1, new Entry({ name: 'Entry 1' }))
      .set(2, new Entry({ name: 'Entry 2' }))
    const group = new Group({
      name: 'My Group',
      entries: new Map().set(1, true).set(2, true)
    })
    const state = {
      ...store.getState(),
      entries: groupEntries.set(3, new Entry({ name: 'Not in group' })),
      groups: new Map().set(1, group)
    }
    const props = { params: { id: 1 } }
    const expectedResult = groupEntries.toIndexedSeq()
    expect(is(groupEntriesSelector(state, props), expectedResult)).toEqual(true)
    expect(groupEntriesSelector(state, props).size).toEqual(2)
    expect(state.entries.size).toEqual(3)
  })

  it('should return empty seq if no entries', () => {
    const group = new Group({ name: 'My Group' })
    const state = {
      ...store.getState(),
      entries: new Map().set(3, new Entry({ name: 'Not in group' })),
      groups: new Map().set(1, group)
    }
    const props = { params: { id: 1 } }
    const expectedResult = new Seq()
    expect(is(groupEntriesSelector(state, props), expectedResult)).toEqual(true)
    expect(groupEntriesSelector(state, props).size).toEqual(0)
    expect(state.entries.size).toEqual(1)
  })

  it('should return empty entries if not yet set', () => {
    const group = new Group({
      name: 'My Group',
      entries: new Map().set(1, true).set(2, true)
    })
    const state = {
      ...store.getState(),
      groups: new Map().set(1, group)
    }
    const props = { params: { id: 1 } }
    const expectedResult = new Seq([new Entry(), new Entry()]);
    expect(is(groupEntriesSelector(state, props), expectedResult)).toEqual(true)
    expect(groupEntriesSelector(state, props).size).toEqual(2)
    expect(state.entries.size).toEqual(0)
  })

  it('should return empty seq if no group', () => {
    const state = {
      ...store.getState(),
      entries: new Map().set(3, new Entry({ name: 'Not in group' }))
    }
    const props = { params: { id: 1 } }
    const expectedResult = new Seq()
    expect(is(groupEntriesSelector(state, props), expectedResult)).toEqual(true)
    expect(groupEntriesSelector(state, props).size).toEqual(0)
    expect(state.entries.size).toEqual(1)
  })

  it('should select the current entry', () => {
    const currentEntry = new Entry({ name: 'Entry 1' })
    const state = {
      ...store.getState(),
      entries: new Map()
        .set(1, currentEntry)
        .set(2, new Entry({ name: 'Other Entry' }))
    }
    const props = { params: { id: 1 } }
    expect(currentEntrySelector(state, props)).toEqual(currentEntry)
  })

  it('should return empty entry if not yet set', () => {
    const state = {
      ...store.getState(),
      entries: new Map()
    }
    const props = { params: { id: 1 } }
    expect(currentEntrySelector(state, props)).toEqual(new Entry())
  })
})
