import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GROUP_NAME
} from './action-types';

import {
  openModal,
  closeModal,
  updateSearchField,
  updateNewGroupName
} from './ui-actions';

describe('ui actions', () => {
  it('should create open modal action', () => {
    const id = 'NEW_GROUP';
    const expectedAction = {
      type: OPEN_MODAL,
      payload: { id }
    }
    expect(openModal(id)).toEqual(expectedAction)
  })

  it('should create close modal action', () => {
    const expectedAction = {
      type: CLOSE_MODAL
    }
    expect(closeModal()).toEqual(expectedAction)
  })

  it('should create update search field action', () => {
    const value = 'search value';
    const expectedAction = {
      type: UPDATE_SEARCH_FIELD,
      payload: { value }
    }
    expect(updateSearchField(value)).toEqual(expectedAction)
  })

  it('should create update new group name action', () => {
    const value = 'Group Name';
    const expectedAction = {
      type: UPDATE_NEW_GROUP_NAME,
      payload: { value }
    }
    expect(updateNewGroupName(value)).toEqual(expectedAction)
  })
})
