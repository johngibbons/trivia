import { createSelector } from 'reselect';
import Game from '../models/Game';
import { currentEntrySelector } from './entries-selector';

export const gamesSelector = state => state.games;
const currentNomineeSelector = (_, props) => props.nominee;
const categoriesSelector = state => state.categories;
const currentGroupSelector = (state, props) => state.groups.get(props.routeParams.id)
const entryFromPropsSelector = (state, props) => state.entries.get(props.routeParams.id)

export const currentGameSelector = (state, props) =>
  state.games.get(props.routeParams.id) || new Game();

export const entryGameSelector = createSelector(
  currentEntrySelector,
  gamesSelector,
  (entry, games) => games.get(entry.game) || new Game()
)

export const gameStartedSelector = createSelector(
  gamesSelector,
  categoriesSelector,
  currentNomineeSelector,
  (games, categories, nominee) => {
    const game = games.get(nominee.game) || new Game();
    const gameCategories = game.categories;
    return gameStarted(gameCategories, categories);
  }
)

export const entryGameStartedSelector = createSelector(
  gamesSelector,
  categoriesSelector,
  currentEntrySelector,
  (games, categories, entry) => {
    const game = games.get(entry.game) || new Game();
    const gameCategories = game.categories;
    return gameStarted(gameCategories, categories);
  }
)

export const groupGameStartedSelector = createSelector(
  gamesSelector,
  categoriesSelector,
  currentGroupSelector,
  (games, categories, group) => {
    const game = games.get(group.game) || new Game();
    const gameCategories = game.categories;
    return gameStarted(gameCategories, categories);
  }
)

const gameStarted = (categoriesSet, categories) => {
  return categoriesSet.reduce((acc, _, key) => {
    const category = categories.get(key);
    return acc || !!(category && category.correctAnswer);
  }, false)
}

export const entriesGameSelector = (state, props) => {
  return state.games.get(props.group.first().game);
}
