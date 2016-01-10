import {expect} from 'chai';

import answersById from '../src/reducers/answer';

describe('answer reducer', () => {

  it('handles ADD_ANSWER', () => {
    const initialState = {};
    const action = {
      type: 'ADD_ANSWER',
      payload: {
        id: 0,
        name: 'Sample Answer'
      },
      meta: {remote: true}
    };

    const nextState = answersById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Answer'
      }
    });
  });

  it('handles REMOVE_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Answer Name'
      }
    };
    const action = {
      type: 'REMOVE_ANSWER',
      payload: {
        id: 0
      },
      meta: {remote: true}
    };

    const nextState = answersById(initialState, action);
    expect(nextState).to.eql({});
  });

  it('handles UPDATE_ANSWER_ATTRIBUTE', () => {
    const initialState = {
      0: {
        id: 0,
        text: 'answer text'
      }
    };

    const action = {
      type: 'UPDATE_ANSWER_ATTRIBUTE',
      payload: {
        id: 0,
        text: 'new text'
      },
      meta: {remote: true}
    };

    const nextState = answersById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        text: 'new text'
      }
    });
  })

});
