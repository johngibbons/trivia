import {expect} from 'chai';

import gamesById from '../src/reducers/game';

describe('gamesById reducer', () => {

  it('handles TOGGLE_GAME_EDITING', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          editing: false
        }
      }
    };

    const action = {
      type: 'TOGGLE_GAME_EDITING',
      payload: {
        id: 0
      }
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          editing: true
        }
      }
    });
  });

  it('handles TOGGLE_GAME_EDITING when initially true', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          editing: true
        }
      }
    };

    const action = {
      type: 'TOGGLE_GAME_EDITING',
      payload: {
        id: 0
      }
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          editing: false
        }
      }
    });
  });

  it('handles TOGGLE_GAME_EDITING when initially empty', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0
        }
      }
    };

    const action = {
      type: 'TOGGLE_GAME_EDITING',
      payload: {
        id: 0
      }
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          editing: true
        }
      }
    });
  });
});
