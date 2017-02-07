import { createSelector } from 'reselect';
import { givenCategorySelector } from './categories-selector';

export const nomineesSelector = state => state.nominees;

export const currentNomineesSelector = createSelector(
  givenCategorySelector,
  nomineesSelector,
  (category, nominees) => category.nominees.keySeq().map(id => nominees.get(id))
);
