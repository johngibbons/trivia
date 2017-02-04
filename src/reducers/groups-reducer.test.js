import { Map } from 'immutable';
import { createGroupSuccess } from '../actions/group-actions';

import Group from '../models/Group';
import reducer from './groups-reducer';

describe('group reducer', () => {
  it('should add group on create success', () => {
    const id = 2;
    const name = 'New Group';
    const initialState = new Map({
      1: new Group({id: 1, name: 'some group'})
    })
    const newGroup = new Group({ id, name });
    const expectedState = initialState.set(id, newGroup);
    const action = createGroupSuccess(id, name);
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
