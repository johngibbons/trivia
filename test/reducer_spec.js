import {expect} from 'chai'

import rootReducer from '../src/reducers/index';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = {};

    const action = {
      type: 'SET_STATE',
      state: {
        games: {
          0: {
            id: 0,
            title: "First Game",
            entries: [1,2,5]
          }
        }
      }
    };

    const nextState = rootReducer(initialState, action);

    expect(nextState).to.eql({
      games: {
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
        games: {
          0: {
            id: 0,
            title: "First Game",
            entries: [1,2,5]
          }
        }
      }
    };

    const nextState = rootReducer(undefined, action);

    expect(nextState).to.eql({
      games: {
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
      games: {
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
        games: {
          0: {
            title: "New Name",
            entries: [1,2,6]
          }
        }
      }
    };

    const nextState = rootReducer(initialState, action);
    expect(nextState).to.eql({
      games: {
        0: {
          id: 0,
          title: "New Name",
          entries: [1,2,6]
        }
      }
    });
  });

});
