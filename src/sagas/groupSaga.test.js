import { takeLatest, call, put, take, fork, select } from 'redux-saga/effects';

import {
  CREATE_GROUP,
  FETCH_GROUP
} from '../actions/action-types';

import * as actions from '../actions/group-actions';

import {
  watchCreateGroup,
  createGroup,
  subscribe,
  watchFetchGroup,
  fetchGroup
} from './groupSaga';

import API from '../api';
import { currentUserSelector } from '../selectors/current-user-selector';
import { push } from 'react-router-redux';
import { database } from 'firebase';

describe('group saga', () => {
  it('watches for create group action', () => {
    const generator = watchCreateGroup();
    expect(generator.next().value)
      .toEqual(fork(takeLatest, CREATE_GROUP, createGroup))
  })

  it('should create group and navigate to it', () => {
    const name = 'New group';
    const action = actions.createGroup(name);
    const generator = createGroup(action);

    expect(generator.next().value).toEqual(select(currentUserSelector))
    const currentUser = { id: 1 }
    expect(generator.next(currentUser).value)
      .toEqual(call(API.createGroupId, null))
    const newGroupId = 'abc';
    expect(generator.next(newGroupId).value)
      .toEqual(call(API.createGroup, newGroupId, action.payload, currentUser.id))
    expect(generator.next().value)
      .toEqual(put(actions.createGroupSuccess(newGroupId, action.payload.name)))
    expect(generator.next().value).toEqual(put(push(`/groups/${newGroupId}`)))
  })

  it('watches for fetch group action', () => {
    const generator = watchFetchGroup();
    expect(generator.next().value)
      .toEqual(fork(takeLatest, FETCH_GROUP, fetchGroup))
  })

  it('should fetch group and set up firebase listeners', () => {
    const groupId = 1;
    const action = actions.fetchGroup(groupId);
    const generator = fetchGroup(action);

    expect(generator.next().value).toEqual(call(subscribe, database, groupId))
    expect(generator.next('CHANNEL').value).toEqual(take('CHANNEL'))
    const emitAction = { type: 'UPDATE_GAME' };
    expect(generator.next(emitAction).value).toEqual(put(emitAction))
  })
})
