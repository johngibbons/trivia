import { createSelector } from 'reselect';
import { currentGroupSelector } from './group-selector';
import { Seq, List } from 'immutable';
import Entry from '../models/Entry';
import Game from '../models/Game';
import Group from '../models/Group';
import User from '../models/User';

export const entriesSelector = state => state.entries;
const categoriesSelector = state => state.categories;
const gamesSelector = state => state.games;
const currentUserSelector = state => state.currentUser;
const groupsSelector = state => state.groups;
const usersSelector = state => state.users;

const entryScore = (entry, categories, games) => {
  const game = games.get(entry.game)
  const gameCategories = game ? game.categories : [];
  return gameCategories.reduce((acc, _, categoryId) => {
    const category = categories.get(categoryId);
    return category &&
      category.correctAnswer &&
      category.correctAnswer === entry.selections.get(category.id) ?
        acc + category.value :
        acc
  }, 0)
}

const entryRankReducer = (entries, curr) => {
  const withSameRank = entries.filter(entry => entry.score === entries.last().score).size;
  return entries.last() && entries.last().score > curr.score ?
    entries.push(curr.set('rank', entries.last().rank + withSameRank)) :
    entries.push(curr.set('rank', entries.last() ? entries.last().rank : 1))
}

export const groupEntriesSelector = createSelector(
  entriesSelector,
  currentGroupSelector,
  categoriesSelector,
  gamesSelector,
  (entries, group, categories, games) => {
    if(!group) return new Seq();
    return group.entries.keySeq()
      .map(key => {
        const entry = entries.get(key)
        return entry ?
          entry.set('score', entryScore(entry, categories, games)) :
          new Entry();
      })
      .sort((entryA, entryB) => entryB.score - entryA.score)
      .reduce(entryRankReducer, new List())
  }
);

export const currentEntrySelector = (state, props) => {
  if (props.entry && props.entry.id) {
    return state.entries.get(props.entry.id) || new Entry();
  } else if (props.routeParams) {
    return state.entries.get(props.routeParams.id) || new Entry();
  } else {
    return new Entry();
  }
}

const gameStarted = (categoriesSet, categories) => {
  return categoriesSet.reduce((acc, _, key) => {
    const category = categories.get(key);
    return acc || !!(category && category.correctAnswer);
  }, false)
}

export const entryVisibleSelector = createSelector(
  gamesSelector,
  categoriesSelector,
  currentEntrySelector,
  currentUserSelector,
  (games, categories, entry, currentUser) => {
    if (currentUser.id && currentUser.id === entry.user) return true;
    const game = games.get(entry.game) || new Game();
    const gameCategories = game.categories;
    return gameStarted(gameCategories, categories);
  }
)

export const entryCompleteSelector = createSelector(
  currentEntrySelector,
  gamesSelector,
  (entry, games) => {
    const game = games.get(entry.game);
    return entry && game && entry.selections.count() === game.categories.count()
  }
)

export const entryGroupSelector = createSelector(
  groupsSelector,
  currentEntrySelector,
  (groups, entry) => groups.get(entry.group) || new Group()
)

export const entryUserSelector = createSelector(
  currentEntrySelector,
  usersSelector,
  (entry, users) => {
    console.log('entry', entry)
    console.log('users', users)
    return entry && entry.user ? users.get(entry.user) : new User()
  }
)
