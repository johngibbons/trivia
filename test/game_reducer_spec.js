import {expect} from 'chai';

import gamesById from '../src/reducers/game';

describe('gamesById reducer', () => {

  it('handles UPDATE_ATTRIBUTE', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          editing: false
        }
      }
    };

    const action = {
      type: 'UPDATE_ATTRIBUTE',
      payload: {
        id: 0,
        editing: true
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

  it('handles UPDATE_ATTRIBUTE when initially true', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          editing: true
        }
      }
    };

    const action = {
      type: 'UPDATE_ATTRIBUTE',
      payload: {
        id: 0,
        editing: false
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

  it('handles UPDATE_ATTRIBUTE when initially empty', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0
        }
      }
    };

    const action = {
      type: 'UPDATE_ATTRIBUTE',
      payload: {
        id: 0,
        editing: true
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
