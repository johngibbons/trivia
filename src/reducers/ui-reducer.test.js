import {
  updateSearchField
} from '../actions/ui-actions';

import {
  signInSuccess
} from '../actions/user-actions';

import { UI } from '../models/UI';
import reducer from './ui-reducer';

describe('ui reducer', () => {
  it('should update search field', () => {
    const searchText = 'Brad Pitt'
    const action = updateSearchField(searchText)
    const expectedResult = new UI({
      searchValue: searchText
    })

    expect(reducer(new UI({searchValue: 'old text'}), action))
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
