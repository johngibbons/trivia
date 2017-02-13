import Category from '../models/Category';
import Game from '../models/Game';
import Entry from '../models/Entry';
import store from '../store';
import {
  givenCategorySelector,
  currentCategorySelector,
  currentCategoriesSelector,
  entryCategoriesSelector,
  entryScoreSelector
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

  it('should return entry score', () => {
    const entry = new Entry({
      id: 'entry1',
      selections: new Map({
        category1: 'nominee1',
        category2: 'nominee2',
        category3: 'nominee5',
      })
    });

    const categories = new Map({
      category1: new Category({
        value: 1,
        correctAnswer: 'nominee1'
      }),
      category2: new Category({
        value: 2,
        correctAnswer: 'nominee2'
      }),
      category3: new Category({
        value: 5,
        correctAnswer: 'nominee3'
      })
    })

    const state = {
      ...store.getState(),
      entries: new Map().set('entry1', entry),
      categories
    }
    const props = { routeParams: { id: 'entry1' } }
    expect(entryScoreSelector(state, props)).toEqual(3)
  })
})
