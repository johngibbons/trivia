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

  it('handles SET_STATE removing nested data if diff', () => {
    const initialState = {
      gamesById: {
        0: {
          id: 0,
          title: 'some title',
          questions: [1]
        }
      }
    }

    const action = {
      type: 'SET_STATE',
      state: {
        gamesById: {
          0: {
            id: 0,
            title: 'some title',
            questions: []
          }
        }
      }
    };

    const nextState = remoteState(initialState, action);
    expect(nextState).to.eql({
      gamesById: {
        0: {
          id: 0,
          title: 'some title',
          questions: []
        }
      }
    });
  });

});
