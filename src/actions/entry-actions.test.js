import {
  UPDATE_ENTRY
} from './action-types';

import {
  updateEntry
} from './entry-actions';

describe('entry actions', () => {
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
