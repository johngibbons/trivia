import store from '../store';
import Game from '../models/Game';
import Entry from '../models/Entry';
import {
  currentGameSelector,
  entryGameSelector
} from './games-selector';
import { Map } from 'immutable';

describe('game selector', () => {
  it('should select current game', () => {
    const props = { routeParams: { id: 1 } };
    const currentGame = new Game({ id: 1, name: 'Some Game' });
    const state = {
      ...store.getState(),
      games: new Map().set(1, currentGame)
    }
    expect(currentGameSelector(state, props)).toEqual(currentGame)
  })

  it('should select entry game', () => {
    const entryId = 1;
    const gameId = 2;
    const props = { routeParams: { id: entryId } };
    const currentEntry = new Entry({ id: entryId, game: gameId })
    const entryGame = new Game({ id: gameId, name: 'Some Game' });
    const state = {
      ...store.getState(),
      games: new Map().set(gameId, entryGame),
      entries: new Map().set(entryId, currentEntry)
    }
    expect(entryGameSelector(state, props)).toEqual(entryGame)
  })
})
