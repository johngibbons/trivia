import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const questionsById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION': {
      return addItem(state, action);
    }
    case 'REMOVE_QUESTION': {
      return removeItem(state, action);
    }
    case 'ADD_ANSWER': {
      return addReferenceItem(state, action, 'question', 'answers');
    }
    case 'REMOVE_ANSWER': {
      return removeReferenceItem(state, action, 'question', 'answers');
    }
    default:
      return state;
  }
};

export default questionsById;
