import Nominee from '../models/Nominee';
import Category from '../models/Category';
import store from '../store';
import {
  nomineesSelector,
  currentNomineesSelector
} from './nominees-selector';
import { is, Map } from 'immutable';

describe('nominees selector', () => {
  it('should select nominees', () => {
    const nominees = new Map()
      .set(1, new Nominee({ text: 'Casey Affleck' }))
      .set(2, new Nominee({ text: 'Denzel Washington' }))
    const state = { ...store.getState(), nominees }
    expect(nomineesSelector(state)).toEqual(nominees);
  })

  it('should select current nominees', () => {
    const nominees = new Map()
      .set(1, new Nominee({ text: 'Casey Affleck' }))
      .set(2, new Nominee({ text: 'Denzel Washington' }))
    const currentCategory = new Category({
      nominees: nominees.map(() => true)
    })
    const category = new Category({ nominees: new Map().set(3, new Nominee()) })
    const state = {
      ...store.getState(),
      nominees,
      categories: new Map().set(1, currentCategory).set(2, category)
    }
    const props = { category: currentCategory };
    expect(is(currentNomineesSelector(state, props), nominees.toIndexedSeq()))
      .toEqual(true);
  })
})
