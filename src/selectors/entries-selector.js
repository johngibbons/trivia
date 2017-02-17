import { createSelector } from 'reselect';
import { currentGroupSelector } from './group-selector';
import { Seq } from 'immutable';
import Entry from '../models/Entry';
import Game from '../models/Game';

export const entriesSelector = state => state.entries;
const categoriesSelector = state => state.categories;
const gamesSelector = state => state.games;
const currentUserSelector = state => state.currentUser;

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

const scoreComparator = (entryA, entryB, categories, games) => {
  const scoreA = entryScore(entryA, categories, games);
  const scoreB = entryScore(entryB, categories, games);
  if (scoreA > scoreB) return -1;
  else if (scoreB > scoreA) return 1;
  else return 0;
}

export const groupEntriesSelector = createSelector(
  entriesSelector,
  currentGroupSelector,
  categoriesSelector,
  gamesSelector,
  (entries, group, categories, games) => {
    if(!group) return new Seq();
    return group.entries.keySeq()
      .map(key => entries.get(key) || new Entry())
      .sort((entryA, entryB) => scoreComparator(entryA, entryB, categories, games))
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
