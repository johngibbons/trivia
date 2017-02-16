import { createSelector } from 'reselect';
import { givenCategorySelector } from './categories-selector';
import { Seq } from 'immutable'
import Nominee from '../models/Nominee'

export const nomineesSelector = state => state.nominees;

export const currentNomineesSelector = createSelector(
  givenCategorySelector,
  nomineesSelector,
  (category, nominees) => {
    return category.id ?
      category.nominees.keySeq().map(id => nominees.get(id) || new Nominee()) :
      new Seq()
  }
);
