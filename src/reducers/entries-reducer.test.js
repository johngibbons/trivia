import {
  setEntry,
  selectNomineeSuccess
} from '../actions/entry-actions';
import { Map } from 'immutable';

import reducer from '../reducers/entries-reducer';

import Entry from '../models/Entry';

describe('entries reducer', () => {
  it('should set a nominee selection', () => {
    const entryId = 1;
    const nominee = {
      id: 1,
      category: 2,
      name: 'nominee'
    };
    const action = selectNomineeSuccess(entryId, nominee);
    const expectedResult = new Map().set(1, new Entry({ selections: new Map().set(2, 1) }))
    expect(reducer(undefined, action)).toEqual(expectedResult)
  })
})
