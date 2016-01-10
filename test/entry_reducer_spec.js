import {expect} from 'chai';

import entriesById from '../src/reducers/entry';

describe('entries reducer', () => {

  it('handles ADD_ENTRY', () => {
    const initialState = {};
    const action = {
      type: 'ADD_ENTRY',
      payload: {
        id: 0,
        name: 'Sample Entry'
      },
      meta: {remote: true}
    };

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Entry'
      }
    });
  });

  it('handles UPDATE_ENTRY_ATTRIBUTE', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Initial Name',
        other: 'other'
      }
    };
    const action = {
      type: 'UPDATE_ENTRY_ATTRIBUTE',
      payload: {
        id: 0,
        name: 'New Name'
      }
    };

    const nextState = entriesById(initialState, action);

    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'New Name',
        other: 'other'
      }
    });
  });

  it('handles ADD_OR_UPDATE_SELECTION when no attr', () => {
    const initialState = {
      0: {
        id: 0
      }
    };
    const action = {
      type: 'ADD_OR_UPDATE_SELECTION',
      payload: {
        entry: 0,
        question: 5,
        selection: 3
      },
      meta: {remote: true}
    }

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        selections: {
          5: 3
        }
      }
    });
    expect(initialState).to.eql({
      0: {
        id: 0
      }
    });
  });

  it('handles ADD_OR_UPDATE_SELECTION for nested attr', () => {
    const initialState = {
      0: {
        id: 0,
        selections: {
          0: 2,
          5: 3
        }
      }
    };
    const action = {
      type: 'ADD_OR_UPDATE_SELECTION',
      payload: {
        entry: 0,
        question: 5,
        selection: 2
      },
      meta: {remote: true}
    }

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        selections: {
          0: 2,
          5: 2
        }
      }
    });
    expect(initialState).to.eql({
      0: {
        id: 0,
        selections: {
          0: 2,
          5: 3
        }
      }
    });
  })

  it('handles REMOVE_ENTRY', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Entry Name'
      }
    };
    const action = {
      type: 'REMOVE_ENTRY',
      payload: {
        id: 0
      },
      meta: {remote: true}
    }

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({});
  });

});
