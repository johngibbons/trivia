import { createSelector } from 'reselect';
import { currentCategorySelector } from './categories-selector';

const nomineesSelector = state => state.nominees;

export const currentPossibleNomineesSelector = createSelector(
  currentCategorySelector,
  nomineesSelector,
  (category, nominees) => category.possible_nominees.map(id => nominees.get(id))
);
