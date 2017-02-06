import { createSelector } from 'reselect';
import { currentGameSelector } from './games-selector.js'

const categorySelector = state => state.categories;
export const currentCategorySelector = (state, props) =>
  state.categories.get(props.category.id)

export const currentCategoriesSelector = createSelector(
  currentGameSelector,
  categorySelector,
  (game, categories) => game && game.categories.keySeq().map(id => categories.get(id))
)
