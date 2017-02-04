import {
  openModal,
  closeModal,
  updateSearchField,
  updateNewGroupName
} from '../actions/ui-actions';

import {
  signInSuccess
} from '../actions/user-actions';

import { UI } from '../models/UI';
import reducer from './ui-reducer';

describe('ui reducer', () => {
  it('should open modal', () => {
    const id = 'NEW_GROUP'
    const action = openModal(id)
    const expectedResult = new UI({
      modal: id
    })

    expect(reducer(new UI(), action))
      .toEqual(expectedResult);
  })

  it('should close modal', () => {
    const action = closeModal();
    const expectedResult = new UI();

    expect(reducer(new UI({modal: 'NEW_GROUP'}), action))
      .toEqual(expectedResult);
  })

  it('should update search field', () => {
    const searchText = 'Brad Pitt'
    const action = updateSearchField(searchText)
    const expectedResult = new UI({
      searchValue: searchText
    })

    expect(reducer(new UI({searchValue: 'old text'}), action))
      .toEqual(expectedResult);
  })

  it('should update new group name', () => {
    const newGroupName = 'Cool Group'
    const action = updateNewGroupName(newGroupName)
    const expectedResult = new UI({
      newGroupName: newGroupName
    })

    expect(reducer(new UI({newGroupName: 'old text'}), action))
      .toEqual(expectedResult);
  })

  it('should close modal on sign in success', () => {
    const action = signInSuccess({
      displayName: 'John',
      email: 'johngibbons10@gmail.com',
      photoURL: 'john.jpeg'
    });
    const prevState = new UI({
      modal: 'AUTH'
    });
    const expectedResult = new UI({
      modal: undefined
    })

    expect(reducer(prevState, action)).toEqual(expectedResult)
  })
});
