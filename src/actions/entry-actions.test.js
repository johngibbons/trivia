import {
  CREATE_ENTRY,
  UPDATE_ENTRY,
  FETCH_ENTRY,
  SET_ENTRY
} from './action-types';

import {
  createEntry,
  updateEntry,
  fetchEntry,
  setEntry
} from './entry-actions';

import Entry from '../models/Entry'

describe('entry actions', () => {
  it('should create a create entry action', () => {
    const entry = new Entry({
      name: 'Some name'
    })
    const groupId = 1;
    const expectedAction = {
      type: CREATE_ENTRY,
      payload: {
        entry,
        groupId
      }
    }
    expect(createEntry(entry, groupId)).toEqual(expectedAction)
  })

  it('should create a fetch entry action', () => {
    const id = 1;
    const expectedAction = {
      type: FETCH_ENTRY,
      payload: {
        id
      }
    }
    expect(fetchEntry(id)).toEqual(expectedAction)
  })

  it('should create a set entry action', () => {
    const entry = {
      name: 'some entry'
    }
    const expectedAction = {
      type: SET_ENTRY,
      payload: {
        entry
      }
    }
    expect(setEntry(entry)).toEqual(expectedAction)
  })

  it('should create an update entry action', () => {
    const entry = {
      name: 'Some new name'
    }
    const expectedAction = {
      type: UPDATE_ENTRY,
      payload: {
        entry
      }
    }
    expect(updateEntry(entry)).toEqual(expectedAction)
  })
})
