import { createSelector } from 'reselect';
import { givenCategorySelector } from './categories-selector';
import { Seq } from 'immutable'
import Nominee from '../models/Nominee'

export const nomineesSelector = state => state.nominees;

export const currentNomineesSelector = createSelector(
  givenCategorySelector,
  nomineesSelector,
  (category, nominees) => {
    return category && category.id ?
      category.nominees.keySeq().map(id => nominees.get(id) || new Nominee()) :
      new Seq()
  }
);

export const gameNomineesSelector = createSelector(
  nomineesSelector,
  nominees => nominees
    .filter(nominee => nominee.game === '2017Oscars')
    .map(nominee => nominee.imageUrl)
    .toSet()
)
