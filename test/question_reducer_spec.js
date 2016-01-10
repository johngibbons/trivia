import {expect} from 'chai';

import questionsById from '../src/reducers/question';

describe('questions reducer', () => {

  it('handles ADD_QUESTION', () => {
    const initialState = {};
    const action = {
      type: 'ADD_QUESTION',
      payload: {
        id: 0,
        name: 'Sample Question'
      },
      meta: {remote: true}
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Question'
      }
    });
  });

  it('handles REMOVE_QUESTION', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Question Name'
      }
    };
    const action = {
      type: 'REMOVE_QUESTION',
      payload: {
        id: 0
      },
      meta: {remote: true}
    }

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({});
  });

  it('handles UPDATE_QUESTION_ATTRIBUTE', () => {
    const initialState = {
      0: {
        id: 0,
        text: "Sample Question"
      }
    };

    const action = {
      type: 'UPDATE_QUESTION_ATTRIBUTE',
      payload: {
        id: 0,
        text: "Updated Question"
      },
      meta: {remote: true}
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        text: "Updated Question"
      }
    });
  });

  it('handles ADD_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Question Name'
      }
    };
    const action = {
      type: 'ADD_ANSWER',
      payload: {
        id: 1,
        question: 0
      },
      meta: {remote: true}
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Question Name',
        answers: [1]
      }
    });
  });

  it('handles REMOVE_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        answers: [0, 1, 2]
      }
    };

    const action = {
      type: 'REMOVE_ANSWER',
      payload: {
        id: 1,
        question: 0
      },
      meta: {remote: true}
    }

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        answers: [0, 2]
      }
    });

  });

  it('handles CHANGE_OR_REMOVE_ANSWER when no answer selected', () => {
    const initialState = {
      0: {
        id: 0
      }
    };

    const action = {
      type: 'CHANGE_OR_REMOVE_ANSWER',
      payload: {
        id: 2,
        question: 0
      },
      meta: {remote: true}
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        selectedAnswer: 2
      }
    });

    expect(initialState).to.eql({
      0: {
        id: 0
      }
    });
  });

});
