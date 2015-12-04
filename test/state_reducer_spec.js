import {expect} from 'chai';

import remoteState from '../src/reducers/state';

describe('remote state reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = {};

    const action = {
      type: 'SET_STATE',
      state: {
        gamesById: {
          0: {
            id: 0,
            title: "First Game",
            entries: [1,2,5]
          }
        }
      }
    };

    const nextState = remoteState(initialState, action);

    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          title: "First Game",
          entries: [1,2,5]
        }
      }
    });
    expect(initialState).to.eql({});
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        gamesById: {
          0: {
            id: 0,
            title: "First Game",
            entries: [1,2,5]
          }
        }
      }
    };

    const nextState = remoteState(undefined, action);

    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          title: "First Game",
          entries: [1,2,5]
        }
      }
    });
  });

  it('handles SET_STATE overriding previous data', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          title: "Initial Name",
          entries: [1,2,5]
        }
      }
    };

    const action = {
      type: "SET_STATE",
      state: {
        gamesById: {
          0: {
            title: "New Name",
            entries: [1,2,6]
          }
        }
      }
    };

    const nextState = remoteState(initialState, action);
    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          title: "New Name",
          entries: [1,2,6]
        }
      }
    });
  });

});
