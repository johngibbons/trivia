import Category from '../models/Category';
import Game from '../models/Game';
import Entry from '../models/Entry';
import store from '../store';
import {
  givenCategorySelector,
  currentCategorySelector,
  currentCategoriesSelector,
  entryCategoriesSelector
} from './categories-selector';
import { Map, is } from 'immutable';

describe('categories selector', () => {
  it('should return entry categories', () => {
    const gameCategories = new Map()
      .set(1, new Category({id: 1, game: 'game'}))
      .set(2, new Category({id: 2, game: 'game'}))
    const categories = gameCategories
      .set(3, new Category({id: 3, game: 'otherGame'}))
    const games = new Map()
      .set('game', new Game({id: 'game', categories: gameCategories}))
    const entries = new Map().set('entry', new Entry({id: 'entry', game: 'game'}))
    const state = {
      ...store.getState(),
      categories,
      games,
      entries
    }
    const expectedResult = new Map()
      .set(1, new Category({id: 1, game: 'game'}))
      .set(2, new Category({id: 2, game: 'game'}))
      .toIndexedSeq()

    const props = { routeParams: { id: 'entry' } }
    expect(is(entryCategoriesSelector(state, props), expectedResult)).toEqual(true)
  })
})
