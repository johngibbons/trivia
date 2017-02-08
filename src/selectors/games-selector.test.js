import store from '../store';
import Game from '../models/Game';
import { currentGameSelector } from './games-selector';

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
})
