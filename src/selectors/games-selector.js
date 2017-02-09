import { createSelector } from 'reselect';
import Game from '../models/Game';
import { currentEntrySelector } from '../selectors/entries-selector';

export const gamesSelector = state => state.games;

export const currentGameSelector = (state, props) =>
  state.games.get(props.routeParams.id) || new Game();

export const entryGameSelector = createSelector(
  currentEntrySelector,
  gamesSelector,
  (entry, games) => games.get(entry.game) || new Game()
)
