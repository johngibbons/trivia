import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();

    expect(store.getState()).to.eql({
      answersById: {},
      entriesById: {},
      gamesById: {},
      questionsById: {}
    });

    store.dispatch({
      type: 'ADD_GAME',
      payload: {
        id: 0,
        title: 'Sample'
      },
      meta: {remote: true}
    });

    expect(store.getState()).to.eq;({
      gamesById: {
        0: {
          id: 0,
          title: 'Sample'
        }
      }
    });

  });
});
