import {
  savePendingCategory
} from '../actions/pending-game-actions';
import {
  setCategories
} from '../actions/category-actions';
import Category from '../models/Category';
import Nominee from '../models/Nominee';
import { Map, is } from 'immutable';
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

  it('should set retrieved categories', () => {
    const newCategories = {
      1: {
        id: 1,
        name: 'category 1',
        nominees: {
          nominee1: true,
          nominee2: true
        }
      },
      2: {
        id: 2,
        name: 'category 2',
        nominees: {
          nominee3: true,
          nominee4: true
        }
      }
    }
    const existingCategories = {
      2: {
        id: 2,
        name: 'an old name'
      },
      3: {
        id: 3,
        name: 'different category'
      }
    }
    const initialState = new Map()
      .set('2', new Category({
        ...existingCategories[2],
        nominees: new Map(existingCategories[2].nominees)
      }))
      .set('3', new Category({
        ...existingCategories[3],
        nominees: new Map(existingCategories[3].nominees)
      }))
    const action = setCategories(newCategories)
    const expectedResult = new Map()
      .set(1, new Category({
        ...newCategories[1],
        nominees: new Map(newCategories[1].nominees)
      }))
      .set(2, new Category({
        ...newCategories[2],
        nominees: new Map(newCategories[2].nominees)
      }))
      .set(3, new Category({
        ...existingCategories[3],
        nominees: new Map(existingCategories[3].nominees)
      }))

    console.log(reducer(initialState, action))
    const nominees = reducer(initialState, action).last().nominees;
    expect(reducer(initialState, action)).toEqual(expectedResult)
    expect(is(reducer(initialState, action), expectedResult)).toEqual(true)
  })
})
