import Category from '../models/Category';
import { createSelector } from 'reselect';
import {
  currentGameSelector,
  entryGameSelector
} from './games-selector.js'
import { currentEntrySelector } from './entries-selector';

export const givenCategorySelector = (state, props) => props.category

const categoriesSelector = state => state.categories;
const groupsSelector = state => state.groups;
const groupFromPropsSelector = (state, props) => props.group;

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

const entryGroupSelector = createSelector(
  currentEntrySelector,
  groupsSelector,
  (entry, groups) => groups.get(entry.group)
);

export const entryScoreSelector = createSelector(
  entryCategoriesSelector,
  currentEntrySelector,
  entryGroupSelector,
  (categories, entry, group) => {
    return categories.reduce((acc, category) =>
      category.correctAnswer &&
      category.correctAnswer === entry.selections.get(category.id) ?
        acc + group.values.get(category.id) :
        acc
      , 0)
  }
)

export const entryPossibleScoreSelector = createSelector(
  entryCategoriesSelector,
  entryGroupSelector,
  (categories, group) => {
    return categories
      .filter(category => category.correctAnswer)
      .reduce((acc, category) => acc + group.values.get(category.id), 0)
  }

)

export const gameTotalPossibleSelector = createSelector(
  entryGroupSelector,
  group => group.values.reduce((acc, value) => acc + value , 0)
)

export const groupCategoriesSelector = createSelector(
  groupFromPropsSelector,
  categoriesSelector,
  (group, categories) => {
    return group.values.toKeyedSeq().map((val, key) => {
      return categories.get(key).set('value', val);
    })
  }
)
