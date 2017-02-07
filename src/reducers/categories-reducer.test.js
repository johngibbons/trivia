import {
  savePendingCategory
} from '../actions/pending-game-actions';
import Category from '../models/Category';
import Nominee from '../models/Nominee';
import { Map } from 'immutable';
import reducer from './categories-reducer';

describe('categories reducer', () => {
  it('should save pending category', () => {
    const pendingCategory = new Category({
      id: 1,
      nominees: new Map()
        .set(1, new Nominee({ id: 1, name: 'nominee' }))
        .set(2, new Nominee({ id: 2, name: 'another' }))
    })
    const action = savePendingCategory(pendingCategory)
    const expectedResult = new Map().set(
      1,
      new Category({
        id: 1,
        nominees: new Map()
          .set(1, true)
          .set(2, true)
      })
    )
    expect(reducer(undefined, action)).toEqual(expectedResult)
  })
})
