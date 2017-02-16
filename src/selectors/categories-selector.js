import Category from '../models/Category';
import { createSelector } from 'reselect';
import {
  currentGameSelector,
  entryGameSelector
} from './games-selector.js'
import { currentEntrySelector } from './entries-selector';

export const givenCategorySelector = (state, props) => props.category

const categoriesSelector = state => state.categories;

export const currentCategorySelector = (state, props) =>
  state.categories.get(props.category.id)

export const currentCategoriesSelector = createSelector(
  currentGameSelector,
  categoriesSelector,
  (game, categories) => game &&
    game.categories.keySeq().map(id => categories.get(id))
)

export const entryCategoriesSelector = createSelector(
  entryGameSelector,
  categoriesSelector,
  (game, categories) => {
    return game && game.categories.keySeq()
      .map(id => categories.get(id) || new Category())
  }
)

export const entryScoreSelector = createSelector(
  entryCategoriesSelector,
  currentEntrySelector,
  (categories, entry) => {
    return categories.reduce((acc, category) =>
      category.correctAnswer === entry.selections.get(category.id) ?
        acc + category.value :
        acc
      , 0)
  }
)
